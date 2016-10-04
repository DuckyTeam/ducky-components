import d3 from 'd3';
import styles from './styles.css';
import utils from './../utils';
import paths from './../svgpaths';
import drawFaces from './../common/drawFaces';
import drawLabels from './../common/drawGoalLabels';
const d3Chart = {};

d3Chart.create = (el, props, state) => {
  props.xAxisOffset = props.height + props.margin.top + 5;

  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props);
  utils.drawYAxisGroup(svg, props);
  utils.drawChartGroup(svg, props, styles.bars);
  utils.drawChartGroup(svg, props, styles.labels);
  utils.drawChartGroup(svg, props, styles.faceGroup);

  d3Chart.update(el, state, props);
};

d3Chart.update = (el, state, props) => {

  //A lot of calculations, functions and definitions for the chart
  state.height = props.height - props.margin.top - props.margin.bottom;
  state.xAxisOffset = state.height + props.margin.top + 5;
  state.barTextFontSize = 20;
  state.textPadding = 6;
  state.speed = 250;
  state.highestScore = d3.max(state.data, (data) => data.value);
  state.leaderId = state.data.filter((data) => data.value === d3.max(state.data, data => data.value))[0].id;
  state.nextGoal = state.goals[state.goals.reduce((acc, goal) => (goal <= state.highestScore) ? acc + 1 : acc, 0)];
  state.yAxisTickValues = state.goals.slice(0, d3.min([state.goals.indexOf(state.nextGoal), state.goals.length]) + 1);
  state.yourScore = state.data.reduce((acc, dp) => dp.id === state.member ? acc + dp.value : acc, 0);

  const isSelectedByName = (label) => {
    let found = false;

    state.data.forEach((dp) => {
      if (dp.label === label && dp.id === state.selected) {
        found = true;
      }
    });
    return found;
  };

  //Define x and y scales
  const xScale = d3.scale.ordinal()
    .domain(state.data.map((data) => data.label))
    .rangeBands([0, props.width - props.margin.left - props.margin.right], 0.67);

  const yScale = d3.scale.linear()
    .domain([0, d3.max([state.highestScore, state.nextGoal])])
    .range([state.height - 4, 15 + props.margin.top]);

  state.barWidth = d3.min([xScale.rangeBand(), 24]);

  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  const xAxis = d3
      .svg
      .axis()
      .scale(xScale)
      .orient("bottom");

  const yAxis = d3
      .svg
      .axis()
      .scale(yScale)
      .tickValues(state.yAxisTickValues)
      .tickSize(-props.width, 0, 0)
      .orient("left");

  // Move xaxis
  utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${state.xAxisOffset})`);

  // Transition in new axis
  utils.selectYAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(yAxis);
  utils.selectXAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(xAxis);
  utils.selectXAxisGroup(svg).selectAll('.tick').attr('id', (data) => isSelectedByName(data) ? styles.selectedXTick : null);

  drawBars(svg, state, props, xScale, yScale);

  //Draw labels
  const labelGroup = utils.getChartGroup(svg, styles.labels);
  const goals = state.goals.slice(0, state.goals.reduce((acc, goal) => (goal <= state.highestScore) ? acc + 1 : acc, 0) + 1)

  drawLabels(labelGroup, state.goals, state.yourScore, yScale, state.speed)

  //Draw faces
  const xValue = props.width - props.margin.left - props.margin.right * 2;
  const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

  drawFaces(chartGroup, state.goals, state.yourScore, state.highestScore, yScale, xValue, state.speed);
};

const drawBars = (svg, state, props, xScale, yScale) => {

  //Bunch of messy helper functions and variables
  const leaderId = state.data.filter((data) => data.value === d3.max(state.data, data => data.value))[0].id;
  const getBarX = (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth) / 2
  const getIconClass = (data) => {
    if (data.id === leaderId) {
      return `${styles.leaderIcon} ${styles.iconPaths}`;
    } else if (data.id === state.member) {
      return `${styles.memberIcon} ${styles.iconPaths}`;
    }
    return `${styles.backgroundColorIcon} ${styles.iconPaths}`;
  };
  const getPath = (data) => {
    if (data.id === state.member && data.id !== leaderId) {
      return paths.leaf;
    } else if (data.id === leaderId) {
      return paths.crown;
    }
    return '';
  };
  const getClasses = data => `${styles.rectangleGroup} ${data.id === state.member ? styles.member : null}
                                ${data.id === state.leaderId ? styles.leader : null} ${data.id === state.selected ? styles.selected : null}`;

  const getFontSize = data => {
    if (data.value < 10000) {
      return '14px';
    } else if (data.value < 1000000) {
      return '12px';
    }
    return '10px';
  };

  const getTextX = (data) => getBarX(data) + state.barWidth / 2;

  //Actually draw the rectangles
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data, (data) => data.id).attr({class: getClasses});
  const entered = rects.enter().append("g")
    .attr({class: getClasses})
    .on('click', (data, index) => data.onClick(data.id, index));

  entered.append("rect")
    .attr('class', styles.rectangle)
    .attr('rx', 2)
    .attr('x', (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth / 2))
    .attr('y', state.height)
    .attr('height', 0)
    .attr('width', state.barWidth);

  entered.append('svg').attr({
    viewBox: "0 0 768 768",
    width: xScale.rangeBand(),
    height: xScale.rangeBand(),
    x: (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth / 2),
    y: state.height,
    opacity: 0
  }).append('path').attr({
    class: getIconClass,
    d: getPath
  });

  entered.append('text')
    .attr({
      class: styles.barText,
      text: (data) => Number(data.value).toLocaleString(),
      x: (data) => xScale(data.label) + 0.5*xScale.rangeBand(),
      y: state.height,
      width: xScale.rangeBand(),
      height: xScale.rangeBand(),
      'font-size': getFontSize
    });

  // Remove unnessescary rectangles
  rects.exit().transition().duration(state.speed)
    .attr('y', state.height)
    .attr('height', 0)
    .remove();

  // Transition the x position after removing rectangles
  const transX = rects.transition().delay(state.speed).duration(state.speed);

  transX.select("rect")
    .attr('x', getBarX)
    .attr('width', state.barWidth)
    .attr('fill', (data) => data.color);

  transX.select("svg")
    .attr('x', getBarX);

  transX.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr({
      'font-size': getFontSize,
      x: getTextX
    });

  // Transition the y position after x position
  const transY = rects.transition().delay(state.speed * 2)

  transY.select("rect")
    .attr('y', (data) => yScale(data.value))
    .attr('height', (data) => state.height - yScale(data.value));

  transY.select("svg").attr({
    y: (data) => yScale(data.value) - state.barWidth - state.barTextFontSize,
    width: () => d3.min([xScale.rangeBand(), 24]),
    height: () => d3.min([xScale.rangeBand(), 24]),
    opacity: 1
  });

  rects.select('svg').select('path').attr({
    d: getPath,
    class: getIconClass
  });

  transY.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr({
      'font-size': getFontSize,
      y: (data) => yScale(data.value) - state.textPadding
    });
}

export default d3Chart;
