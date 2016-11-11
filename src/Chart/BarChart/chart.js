import { min, max } from 'd3-array';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

import styles from './styles.css';
import utils from './../utils';
import paths from './../svgpaths';
import drawBars from './../common/drawBars';
import drawFaces from './../common/drawFaces';
import drawLabels from './../common/drawGoalLabels';
import drawCO2AxisLabel from './../common/drawCO2AxisLabel';
import calculateYAxisTicks from './../common/calculateYAxisTicks';
import getShortenedName from './../common/calculateShortenedName';
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

  state.barTextFontSize = 20;
  state.textPadding = 6;
  state.speed = 250;

  //A lot of calculations, functions and definitions for the chart
  state.height = props.height - props.margin.top - props.margin.bottom;
  state.xAxisOffset = state.height + props.margin.top + 5;
  state.highestScore = max(state.data, (data) => data.value);
  state.lowestScore = min(state.data, (data) => data.value);
  state.leaderId = (state.highestScore === 0) ? -1 : state.data.filter((data) => data.value === max(state.data, data => data.value))[0].id;
  state.nextGoal = state.goals[state.goals.reduce((acc, goal) => (goal <= state.highestScore) ? acc + 1 : acc, 0)];
  state.yourScore = state.data.reduce((acc, dp) => dp.id === state.memberOf ? acc + dp.value : acc, 0);

  state.data = state.data.map(el => {
    el.label = getShortenedName(el.label, state.data.length);
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
  const xScale = scaleBand()
    .domain(state.data.map((data) => data.label))
    .range([0, props.width - props.margin.left - props.margin.right])
    .round(true);

  const yScale = scaleLinear()
    .domain([0, max([state.highestScore, state.nextGoal, state.goals[1]])])
    .range([state.height - 4, 15 + props.margin.top]);

  state.barWidth = min([xScale.bandwidth(), 24]);
  state.yAxisTickValues = calculateYAxisTicks(state.goals, state.nextGoal, state.lowestScore, yScale);


  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  const xAxis = axisBottom(xScale);

  const yAxis = axisLeft(yScale)
      .tickValues(state.yAxisTickValues)
      .tickSize(-props.width, 0, 0);

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
    }).select('line').attr('stroke', 'none');

  //Draw small triangle indicator
  const leader = state.data.filter(d => d.id === state.selectedId);

  const triangles = select(`.${styles.triangleIndicator}`).selectAll('svg').data(leader);

  triangles.enter().append('svg')
    .attr('viewBox', "0 0 16 8")
    .attr('width', '16px')
    .attr('height', '8px')
    .attr('x', d => xScale(d.label) + (xScale.bandwidth() - 16) / 2)
    .attr('y', state.xAxisOffset + 40)
    .append('polygon')
      .attr('points', paths.arrow)
      .attr('class', "st0")
      .attr('fill', "#004750");

  triangles.transition().duration(state.speed)
    .attr('x', d => xScale(d.label) + (xScale.bandwidth() - 16) / 2)
    .attr('y', state.xAxisOffset + 26);

  drawBars(svg, state, props, xScale, yScale, styles);

  //Draw labels
  const labelGroup = utils.getChartGroup(svg, styles.labels);

  drawLabels(labelGroup, state.yAxisTickValues, state.yourScore, yScale, dontAnimateIn ? 0 : state.speed)

  //Draw faces
  /*
  const xValue = props.width - props.margin.left - props.margin.right * 2;
  const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

  drawFaces(chartGroup, state.goals, state.yourScore, state.highestScore, yScale, xValue, dontAnimateIn ? 0 : state.speed);
  */
};

d3Chart.destroy = (id) => {
  utils.selectSVG(props.id).remove();
};

export default d3Chart;
