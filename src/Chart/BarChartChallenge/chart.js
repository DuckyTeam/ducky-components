import { min, max } from 'd3-array';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

import styles from './styles.css';
import utils from './../utils';
import paths from './../svgpaths';
import drawBars from './drawBars';
import drawFaces from './../common/drawFaces';
import drawLabels from './../common/drawGoalLabelsRight';
import drawText from './../common/drawStartsInText';
import drawCO2AxisLabel from './../common/drawCO2AxisLabel';
import calculateYAxisTicks from './calculateYAxisTicks';
import getShortenedName from './../common/calculateShortenedName';
import reduceBars from './reduceBars';
const d3Chart = {};

const margin = {
  left: 16,
  right: 80,
  top: 10,
  bottom: 40
};

d3Chart.create = (el, state, props) => {
  props.margin = margin;
  props.xAxisOffset = props.height + props.margin.top + 5;

  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props, true);
  utils.drawYAxisGroup(svg, props, state.hasStarted);
  utils.drawChartGroup(svg, props, styles.bars);
  utils.drawChartGroup(svg, props, styles.labels);
  utils.drawChartGroup(svg, props, styles.daysToStart);

  d3Chart.update(el, state, props, true);
};

d3Chart.update = (el, state, props, dontAnimateIn) => {
  const speed = 250;
  const maxWidthBar = 56;
  props.margin = margin;

  //A lot of calculations, functions and definitions for the chart
  const {
    memberOf,
    selectedId,
    graphID,
    milestones,
    goal,
    onClick,
    onCo2Click,
    daysToStart
  } = state;

  const height = props.height - props.margin.top - props.margin.bottom;
  const xAxisOffset = height + props.margin.top + 5;
  const hasStarted = daysToStart <= 0;
  const highestScore = max(state.data, (data) => data.value);
  const lowestScore = min(state.data, (data) => data.value);
  const leaderId = state.noLeader ? null : (highestScore === 0) ? -1 : state.data.filter((data) => data.value === max(state.data, data => data.value))[0].id;
  const nextGoal = milestones[min([milestones.reduce((acc, goal) => (goal <= highestScore) ? acc + 1 : acc, 0) + 1, milestones.length])];
  const yourScore = state.data.reduce((acc, dp) => dp.id === memberOf ? acc + dp.value : acc, 0);

  const data = reduceBars(
    state.data
      .map(d => { d.sortValue = d.value; return d; })
      .sort((a,b) => b.sortValue - a.sortValue),
    memberOf
  );

  const isSelectedByName = (label) => {
    let found = false;

    data.forEach((dp) => {
      if (dp.label === label && dp.id === selectedId) {
        found = true;
      }
    });
    return found;
  };

  const getIdbyName = name => {
    let id = -1;
    data.forEach((d) => {
      if (d.label === name) {
        id = d.id;
      }
    });
    return id;
  }

  //Define x and y scales
  const xScale = scaleBand()
    .domain(data.map((data) => data.label))
    .range([props.margin.left, props.width - props.margin.left - props.margin.right])
    .padding(0.4);

  const bottomX = height + props.margin.top - 25;

  const highestYValue = max([highestScore, nextGoal, milestones[1]]);

  const yScale = scaleLinear()
    .domain([0, highestYValue])
    .range([bottomX, 15 + props.margin.top]);

  const yAxisTickValues = milestones.length !== 0 || goal ? calculateYAxisTicks(milestones, nextGoal, yourScore, highestYValue, goal, hasStarted, yScale) : [];

  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  const xAxis = axisBottom(xScale)
      .tickFormat(d => getShortenedName(d, state.data.length));

  const yAxis = axisLeft(yScale)
      .tickValues(yAxisTickValues.map(x => x.value))
      .tickSize(-props.width, 0, 0);

  // Move xaxis
  utils.selectXAxisGroup(svg).attr("transform", `translate(0, ${xAxisOffset})`);

  // Transition in new axis
  utils.selectYAxisGroup(svg).transition().duration(dontAnimateIn ? 0 : speed).delay(speed).call(yAxis);
  utils.selectXAxisGroup(svg).transition().duration(speed).delay(speed).call(xAxis);
  utils.selectXAxisGroup(svg).selectAll('.tick')
    .attr('id', (data) => isSelectedByName(data) ? styles.selectedXTick : null)
    .on('click', (data, index) => {
      if (onClick) {
        onClick(getIdbyName(data));
      }
    }).select('line').attr('stroke', 'none');

  (hasStarted)
    ? drawBars(
        svg, data, xScale, yScale, height,
        maxWidthBar, leaderId, yourScore, speed,
        memberOf, selectedId, onClick, styles
      )
    : drawText(
        utils.getChartGroup(svg, styles.daysToStart),
        daysToStart,
        props.height - 13,
        props.width - props.margin.left - props.margin.right,
        styles.daysToStartMobile
      );

  //Draw labels
  const labelGroup = utils.getChartGroup(svg, styles.labels);

  if (yAxisTickValues.length !== 0) drawLabels(labelGroup, yAxisTickValues, yScale, props.width, dontAnimateIn ? 0 : speed, onCo2Click)

};

d3Chart.destroy = (id) => {
  utils.selectSVG(id).selectAll('g').remove();
};

export default d3Chart;
