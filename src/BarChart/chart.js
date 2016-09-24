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
  const height = props.height - props.margin.top - props.margin.bottom;
  const xAxisOffset = height + props.margin.top + 5;
  state.speed = 250;
  state.leaderId = state.data.filter((data) => data.value === d3.max(state.data, data => data.value))[0].id;
  const barTextFontSize = 20;
  const textPadding = 6;

  const faceValues = state.goals.map((goal, index) => {
    return index > 0 ? state.goals[index] - (goal - state.goals[index - 1]) / 2 : goal / 2;
  }).slice(0, 4);

  const getPath = (data) => {
    if (data.id === state.member && data.id !== state.leaderId) {
      return paths.leaf;
    } else if (data.id === state.leaderId) {
      return paths.crown;
    }
    return '';
  };

  const getIconClass = (data) => {
    if (data.id === state.leaderId) {
      return `${styles.leaderIcon} ${styles.iconPaths}`;
    } else if (data.id === state.member) {
      return `${styles.memberIcon} ${styles.iconPaths}`;
    }
    return `${styles.backgroundColorIcon} ${styles.iconPaths}`;
  };

  const isSelectedByName = (label) => {
    let found = false;

    state.data.forEach((dp) => {
      if (dp.label === label && dp.id === state.selected) {
        found = true;
      }
    });
    return found;
  };

  const yourScore = state.data.reduce((acc, dp) => {
    return dp.id === state.member ? acc + dp.value : acc;
  }, 0);

  const xScale = d3.scale.ordinal()
    .domain(state.data.map((data) => data.label))
    .rangeBands([0, props.width - props.margin.left - props.margin.right], 0.67);

  const getBarWidth = () => d3.min([xScale.rangeBand(), 24]);

  const getTextX = (data) => getBarX(data) + getBarWidth(data) / 2;

  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  // Move xaxis
  utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

  const highestScore = d3.max(state.data, (data) => data.value);

  const nextGoal = () => {
    for (let index = 0; index < state.goals.length; index += 1) {
      if (state.goals[index] > highestScore) {
        return state.goals[index];
      }
    }
    return state.goals[state.goals.length - 1];
  };

  const yAxisTickValues = state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1);
  const yScale = d3.scale.linear()
    .domain([0, d3.max([highestScore, nextGoal()])])
    // Make sure all the stuff on top of graph actually fits inside canvas
    .range([height - 4, 15 + barTextFontSize + textPadding * 2]);

  const xAxis = d3
      .svg
      .axis()
      .scale(xScale)
      .orient("bottom");

  const yAxis = d3
      .svg
      .axis()
      .scale(yScale)
      .tickValues(state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1))
      .tickSize(-props.width, 0, 0)
      .orient("left");

  const faces = svg.select(`.${styles.faceGroup}`).selectAll('svg').data(faceValues);
  const yAxisTicks = svg.select(`.${styles.yAxisTickValuesGroup}`).selectAll('svg').data(yAxisTickValues);
  const textLables = svg.select(`.${styles.textLables}`).selectAll('text').data(yAxisTickValues);

  // Transition in new axis
  utils.selectYAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(yAxis);
  utils.selectXAxisGroup(svg).transition().duration(state.speed).delay(state.speed).call(xAxis)
    .selectAll('.tick')
    .attr('id', (data) => {
      return isSelectedByName(data) ? styles.selectedXTick : null;
    });

  const enteredFaces = faces.enter();

  enteredFaces.append('svg').attr({
    viewBox: "0 0 768 768",
    x: props.width - props.margin.right - 20,
    y: data => yScale(data),
    width: 20,
    height: 20
  }).append('path').attr({
    d: (data, index) => paths.faces[index]
  });
  faces.exit().remove();

  faces.transition().delay(state.speed).duration(state.speed).attr({
    x: props.width - props.margin.right - props.margin.left - 15,
    y: yScale,
  }).select('path')
    .attr({
      class: (data, index) => data <= yourScore ? styles[`faceActive${index}`] : styles.faceInactive
    });

  // For y axis tick lables
  const enteredTickValues = yAxisTicks.enter();

  enteredTickValues.append('svg').attr({
    viewBox: "0 0 768 768",
    width: 40,
    height: 12,
    y: data => yScale(data) - 10,
    x: -300
  }).append('path').attr({
    d: (data) => {
      return (data <= yourScore) ? paths.check : paths.leaf;
    },
    class: (data) => {
      return (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
    }
  });
  yAxisTicks.exit().remove();
  yAxisTicks.transition().duration(state.speed).delay(state.speed).attr({
    y: data => yScale(data) - 10,
    x: -30
  }).select('path')
  .attr({
    d: (data) => {
      return (data <= yourScore) ? paths.check : paths.leaf;
    },
    class: (data) => {
      return (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
    }
  });

  // For y axis tick text
  const textLablesValues = textLables.enter();

  textLablesValues.append('text')
    .text((data) => Number(data).toLocaleString())
    .attr({
      x: -80,
      y: data => yScale(data),
      class: (data) => {
        return (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText;
      },
      'font-size': '10px'
    });
  textLables.exit().remove();

  textLables.transition().duration(state.speed).delay(state.speed)
    .text((data) => Number(data).toLocaleString())
    .attr({
      class: (data) => {
        return (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText;
      },
      'font-size': '10px',
      y: yScale,
      x: 0
    });

  drawBars(svg, state, props, xScale, yScale);
};

const drawBars = (svg, state, props, xScale, yScale) => {

  //Bunch of messy helper functions and variables
  const height = props.height - props.margin.top - props.margin.bottom;
  const textPadding = 6;
  const barTextFontSize = 20;
  const leaderId = state.data.filter((data) => data.value === d3.max(state.data, data => data.value))[0].id;
  const getBarWidth = () => d3.min([xScale.rangeBand(), 24]);
  const getBarX = (data) => xScale(data.label) + (xScale.rangeBand() - getBarWidth()) / 2
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
  const getTextX = (data) => getBarX(data) + getBarWidth(data) / 2;

  //Actually draw the rectangles
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data, (data) => data.id).attr({class: getClasses});
  const entered = rects.enter().append("g")
    .attr({class: getClasses})
    .on('click', (data, index) => data.onClick(data.id, index));

  entered.append("rect")
    .attr('class', styles.rectangle)
    .attr('rx', 2)
    .attr('x', (data) => xScale(data.label) + (xScale.rangeBand() - getBarWidth()) / 2)
    .attr('y', height)
    .attr('height', 0)
    .attr('width', () => d3.min([xScale.rangeBand(), 24]));

  entered.append('svg').attr({
    viewBox: "0 0 768 768",
    width: xScale.rangeBand(),
    height: xScale.rangeBand(),
    x: (data) => xScale(data.label) + (xScale.rangeBand() - getBarWidth()) / 2,
    y: height,
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
      y: height,
      width: xScale.rangeBand(),
      height: xScale.rangeBand(),
      'font-size': getFontSize
    });

  // Remove unnessescary rectangles
  rects.exit().transition().duration(state.speed)
    .attr('y', height)
    .attr('height', 0)
    .remove();

  // Transition the x position after removing rectangles
  const transX = rects.transition().delay(state.speed).duration(state.speed);

  transX.select("rect")
    .attr('x', (data) => xScale(data.label) + (xScale.rangeBand() - getBarWidth()) / 2)
    .attr('width', () => d3.min([xScale.rangeBand(), 24]))
    .attr('fill', (data) => data.color);

  transX.select("svg")
    .attr({x: (data) => xScale(data.label) + (xScale.rangeBand() - getBarWidth()) / 2});

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
    .attr('height', (data) => height - yScale(data.value));

  transY.select("svg").attr({
    y: (data) => yScale(data.value) - getBarWidth(data) - barTextFontSize,
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
      y: (data) => yScale(data.value) - textPadding
    });
}

export default d3Chart;
