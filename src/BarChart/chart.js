import d3 from 'd3';
import styles from './styles.css';
import utils from './utils';
import paths from './svgpaths';
const d3Chart = {};

d3Chart.create = (el, props, state) => {
  props.xAxisOffset = props.height + props.margin.top + 5;

  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props);
  utils.drawYAxisGroup(svg, props);
  utils.drawChartGroup(svg, props, styles.bars);
  utils.drawChartGroup(svg, props, styles.faceGroup);
  utils.drawChartGroup(svg, props, styles.yAxisTickValuesGroup);
  utils.drawChartGroup(svg, props, styles.textLables);

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
  state.nextGoal = (() => {
    for (let index = 0; index < state.goals.length; index += 1) {
      if (state.goals[index] > state.highestScore) {
        return state.goals[index];
      }
    }
    return state.goals[state.goals.length - 1];
  })();
  state.yAxisTickValues = state.goals.slice(0, d3.min([state.goals.indexOf(state.nextGoal), state.goals.length]) + 1);
  state.yourScore = state.data.reduce((acc, dp) => {
    return dp.id === state.member ? acc + dp.value : acc;
  }, 0);

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
    .range([state.height - 4, 15 + state.barTextFontSize + state.textPadding * 2]);

  state.barWidth = d3.min([xScale.rangeBand(), 24]);

  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  // Move xaxis
  utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${state.xAxisOffset})`);

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

  // Transition in new axis
  utils.selectYAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(yAxis);
  utils.selectXAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(xAxis)
    .selectAll('.tick')
    .attr('id', (data) => {
      return isSelectedByName(data) ? styles.selectedXTick : null;
    });

  drawLabels(svg, state, props, yScale);
  drawBars(svg, state, props, xScale, yScale);
  drawFaces(svg, state, props, yScale);
};

const drawLabels = (svg, state, props, yScale) => {

  //TODO: Merge into one operation

  const yAxisTicks = svg.select(`.${styles.yAxisTickValuesGroup}`).selectAll('svg').data(state.yAxisTickValues);
  const textLables = svg.select(`.${styles.textLables}`).selectAll('text').data(state.yAxisTickValues);

  const enteredTickValues = yAxisTicks.enter();

  enteredTickValues.append('svg').attr({
    viewBox: "0 0 768 768",
    width: 40,
    height: 12,
    y: data => yScale(data) - 15,
    x: -300
  }).append('path').attr({
    d: (data) => {
      return (data <= state.yourScore) ? paths.check : paths.leaf;
    },
    class: (data) => {
      return (data <= state.yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
    }
  });

  yAxisTicks.exit().transition().duration(state.speed).attr({
    x: -300
  })
  .remove();

  yAxisTicks.transition().duration(state.speed).delay(state.speed).attr({
    y: data => yScale(data) - 15,
    x: -30
  });

  yAxisTicks.select('path')
  .attr({
    d: (data) => {
      return (data <= state.yourScore) ? paths.check : paths.leaf;
    },
    class: (data) => {
      return (data <= state.yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
    }
  });

  const textLablesValues = textLables.enter();

  textLablesValues.append('text')
    .text((data) => Number(data).toLocaleString())
    .attr({
      x: -80,
      y: data => yScale(data),
      class: (data) => (data <= state.yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText,
      'font-size': '10px'
    });

  textLables.exit().transition().duration(state.speed).attr({
    x: -80
  }).remove();

  textLables.transition().duration(state.speed).delay(state.speed)
    .text((data) => Number(data).toLocaleString())
    .attr({
      'font-size': '10px',
      y: d => yScale(d) - 5,
      x: 0
    });

  textLables.attr({
    class: (data) => (data <= state.yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText
  });
}

const drawFaces = (svg, state, props, yScale) => {

  //Variable and helper functions
  const faceValues = state.goals.map((goal, index) => {
    return index > 0 ? state.goals[index] - (goal - state.goals[index - 1]) / 2 : goal / 2;
  }).slice(0, 4);

  //Draw faces
  const faces = svg.select(`.${styles.faceGroup}`).selectAll('svg').data(faceValues);
  const enteredFaces = faces.enter();

  enteredFaces.append('svg').attr({
    viewBox: "0 0 768 768",
    x: props.width - props.margin.right - 20,
    y: data => yScale(data) - 10,
    width: 20,
    height: 20
  }).append('path').attr({
    d: (data, index) => paths.faces[index]
  });

  faces.exit().remove();

  faces.transition().delay(state.speed).duration(state.speed).attr({
    x: props.width - props.margin.right - props.margin.left - 15,
    y: d => yScale(d) - 10,
  }).select('path')
    .attr({
      class: (data, index) => state.goals[index] <= state.yourScore ? styles[`faceActive${index}`] : styles.faceInactive
    });

}

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
