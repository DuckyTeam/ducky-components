import d3 from 'd3';
import styles from './styles.css';
import utils from './../utils';
import paths from './../svgpaths';
import drawFaces from './../common/drawFaces';
import drawLabels from './../common/drawGoalLabels';
import drawCO2AxisLabel from './../common/drawCO2AxisLabel';
import calculateYAxisTicks from './../common/calculateYAxisTicks';
const d3Chart = {};

d3Chart.create = (el, props, state) => {
  props.xAxisOffset = props.height + props.margin.top + 5;

  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props, true);
  utils.drawYAxisGroup(svg, props);
  utils.drawChartGroup(svg, props, styles.bars);
  utils.drawChartGroup(svg, props, styles.labels);
  utils.drawChartGroup(svg, props, styles.faceGroup);
  utils.drawChartGroup(svg, props, styles.triangleIndicator);

  drawCO2AxisLabel(utils.drawChartGroup(svg, props, styles.co2AxisLabel));

  d3Chart.update(el, state, props, true);
};

d3Chart.update = (el, state, props, dontAnimateIn) => {

  //A lot of calculations, functions and definitions for the chart
  state.height = props.height - props.margin.top - props.margin.bottom;
  state.xAxisOffset = state.height + props.margin.top + 5;
  state.barTextFontSize = 20;
  state.textPadding = 6;
  state.speed = 250;
  state.highestScore = d3.max(state.data, (data) => data.value);
  state.lowestScore = d3.min(state.data, (data) => data.value);
  state.leaderId = (state.highestScore === 0) ? -1 : state.data.filter((data) => data.value === d3.max(state.data, data => data.value))[0].id;
  state.nextGoal = state.goals[state.goals.reduce((acc, goal) => (goal <= state.highestScore) ? acc + 1 : acc, 0)];
  state.yourScore = state.data.reduce((acc, dp) => dp.id === state.memberOf ? acc + dp.value : acc, 0);

  const getShortenedName = name => {
    if (state.data.length < 5) {
      if (name.length > 14) {
        return name.substring(0, 12) + '...';
      }
      return name;
    } else {
      if (name.length > 6) {
        return name.substring(0, 4) + '...';
      }
      return name;
    }
  };

  state.data = state.data.map(el => {
    el.label = getShortenedName(el.label);
    return el;
  });

  const isSelectedByName = (label) => {
    let found = false;

    state.data.forEach((dp) => {
      if (dp.label === label && dp.id === state.selectedId) {
        found = true;
      }
    });
    return found;
  };

  const getIdbyName = name => {
    let id = -1;
    state.data.forEach((d) => {
      if (d.label === name) {
        id = d.id;
      }
    });
    return id;
  }

  //Define x and y scales
  const xScale = d3.scale.ordinal()
    .domain(state.data.map((data) => data.label))
    .rangeBands([0, props.width - props.margin.left - props.margin.right], 0.67);

  const yScale = d3.scale.linear()
    .domain([0, d3.max([state.highestScore, state.nextGoal, state.goals[1]])])
    .range([state.height - 4, 15 + props.margin.top]);

  state.barWidth = d3.min([xScale.rangeBand(), 24]);
  state.yAxisTickValues = calculateYAxisTicks(state.goals, state.nextGoal, state.lowestScore, yScale);


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
  utils.selectYAxisGroup(svg).transition().duration(dontAnimateIn ? 0 : state.speed).delay(state.speed).call(yAxis);
  if (!state.isMobile) utils.selectXAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(xAxis);
  utils.selectXAxisGroup(svg).selectAll('.tick')
    .attr('id', (data) => isSelectedByName(data) ? styles.selectedXTick : null)
    .on('click', (data, index) => {
      if (state.onClick) {
        state.onClick(getIdbyName(data));
      }
    });

  drawBars(svg, state, props, xScale, yScale);

  //Draw labels
  const labelGroup = utils.getChartGroup(svg, styles.labels);

  drawLabels(labelGroup, state.yAxisTickValues, state.yourScore, yScale, dontAnimateIn ? 0 : state.speed, state.onClickCO2)

  //Draw faces
  /*
  const xValue = props.width - props.margin.left - props.margin.right * 2;
  const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

  drawFaces(chartGroup, state.goals, state.yourScore, state.highestScore, yScale, xValue, dontAnimateIn ? 0 : state.speed);
  */
};

const drawBars = (svg, state, props, xScale, yScale) => {

  //Bunch of messy helper functions and variables
  const leaderId = state.leaderId;
  const getBarX = (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth) / 2
  const getIconClass = (data) => {
    if (data.id === leaderId) {
      return `${styles.leaderIcon} ${styles.iconPaths}`;
    } else if (data.id === state.memberOf) {
      return `${styles.memberIcon} ${styles.iconPaths}`;
    }
    return `${styles.backgroundColorIcon} ${styles.iconPaths}`;
  };
  const getPath = (data) => {
    if (data.id === state.memberOf && data.id !== leaderId) {
      return (state.isMobile || state.yourScore === 0) ? paths.check : paths.leaf;
    } else if (data.id === leaderId) {
      return paths.crown;
    }
    return '';
  };
  const getClasses = data => `${state.isMobile ? styles.rectangleGroupMobile : styles.rectangleGroup} ${data.id === state.memberOf ? styles.member : null}
                                ${data.id === state.leaderId ? styles.leader : null} ${data.id === state.selectedId ? styles.selected : null}`;

  const getFontSize = data => {
    if (data.value < 10000) {
      return '14px';
    } else if (data.value < 1000000) {
      return '12px';
    }
    return '10px';
  };

  const getTextClass = d => {
    if (d.value === 0) {
      return styles.barTextHidden;
    }
    if (state.isMobile) {
      return styles.barTextHidden;
    } else if (d.id === leaderId || d.id === state.memberOf) {
      return styles.barText;
    }
    return styles.barTextHidden;
  }

  const getTextX = (data) => getBarX(data) + state.barWidth / 2;

  //Draw small triangle indicator
  const leader = state.data.filter(d => d.id === state.selectedId);

  d3.select(`.${styles.triangleIndicator}`)

  const triangles = d3.select(`.${styles.triangleIndicator}`).selectAll('svg').data(leader);

  triangles.enter().append('svg').attr({
    viewBox: "0 0 16 8",
    x: d => xScale(d.label) + (xScale.rangeBand() - 16) / 2,
    y: state.xAxisOffset,
    width: '16px',
    height: '8px'
  }).append('polygon').attr({
    points: paths.arrow,
    class: "st0",
    fill: "#004750"
  });

  triangles.transition().duration(state.speed).attr({
    x: d => xScale(d.label) + (xScale.rangeBand() - 16) / 2,
    y: state.xAxisOffset + 26
  });


  //Actually draw the rectangles
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data, (data) => data.id).attr({class: getClasses});
  const entered = rects.enter().append("g")
    .attr({class: getClasses})
    .on('click', (data, index) => {
      if (state.onClick) {
        state.onClick(data.id)}
      }
    );

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
      class: getTextClass,
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
    y: (data) => data.value === 0 || state.isMobile ? yScale(data.value) - state.barWidth - 8 : yScale(data.value) - state.barWidth - state.barTextFontSize,
    width: () => d3.min([xScale.rangeBand(), 24]),
    height: () => d3.min([xScale.rangeBand(), 24]),
    opacity: 1
  });

  rects.select('svg').select('path').attr({
    d: getPath,
    class: getIconClass
  });

  rects.select('text').attr({
    class: getTextClass
  });

  transY.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr({
      'font-size': getFontSize,
      y: (data) => yScale(data.value) - state.textPadding
    });
}

export default d3Chart;
