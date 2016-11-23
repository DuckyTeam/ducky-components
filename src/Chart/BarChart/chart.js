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
  props.margin.bottom = state.isMobile ? props.margin.bottom : props.margin.bottom;
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
  const speed = 250;
  const maxWidthBar = state.maxWidthBar | 24;

  //A lot of calculations, functions and definitions for the chart
  const { memberOf, selectedId, milestones, goal, isMobile, onClick } = state;
  const height = props.height - props.margin.top - props.margin.bottom;
  const xAxisOffset = height + props.margin.top + 5;
  const highestScore = max(state.data, (data) => data.value);
  const lowestScore = min(state.data, (data) => data.value);
  const leaderId = state.noLeader ? null : (highestScore === 0) ? -1 : state.data.filter((data) => data.value === max(state.data, data => data.value))[0].id;
  const nextGoal = milestones[milestones.reduce((acc, goal) => (goal <= highestScore) ? acc + 1 : acc, 0)];
  const yourScore = state.data.reduce((acc, dp) => dp.id === memberOf ? acc + dp.value : acc, 0);

  const data = state.data.map(el => {
    el.label = getShortenedName(el.label, state.data.length);
    return el;
  });

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
    .range([20, props.width - props.margin.left - props.margin.right])
    .padding(0.1);

  const bottomX = isMobile ? height + props.margin.top + 10 : height + props.margin.top - 25;

  const yScale = scaleLinear()
    .domain([0, max([highestScore, nextGoal, milestones[1]])])
    .range([bottomX, 15 + props.margin.top]);

  const yAxisTickValues = calculateYAxisTicks(milestones, nextGoal, yourScore, yScale);

  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  const xAxis = axisBottom(xScale);

  const yAxis = axisLeft(yScale)
      .tickValues(yAxisTickValues)
      .tickSize(-props.width, 0, 0);

  // Move xaxis
  utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

  // Transition in new axis
  utils.selectYAxisGroup(svg).transition().duration(dontAnimateIn ? 0 : speed).delay(speed).call(yAxis);
  if (!isMobile) utils.selectXAxisGroup(svg).transition().duration(speed).delay(speed).call(xAxis);
  utils.selectXAxisGroup(svg).selectAll('.tick')
    .attr('id', (data) => isSelectedByName(data) ? styles.selectedXTick : null)
    .on('click', (data, index) => {
      if (onClick) {
        onClick(getIdbyName(data));
      }
    }).select('line').attr('stroke', 'none');

  //Draw small triangle indicator
  const leader = data.filter(d => d.id === selectedId);

  const triangles = select(`.${styles.triangleIndicator}`).selectAll('svg').data(leader);

  triangles.enter().append('svg')
    .attr('viewBox', "0 0 16 8")
    .attr('width', '16px')
    .attr('height', '8px')
    .attr('x', d => xScale(d.label) + (xScale.bandwidth() - 16) / 2)
    .attr('y', xAxisOffset + 40)
    .append('polygon')
      .attr('points', paths.arrow)
      .attr('class', "st0")
      .attr('fill', "#004750")
      .merge(triangles).transition().duration(speed)
        .attr('x', d => xScale(d.label) + (xScale.bandwidth() - 16) / 2)
        .attr('y', xAxisOffset + 26);

  drawBars(svg, data, xScale, yScale, bottomX, maxWidthBar, leaderId, yourScore, speed, isMobile, memberOf, selectedId, onClick, styles);

  //Draw labels
  const labelGroup = utils.getChartGroup(svg, styles.labels);

  drawLabels(labelGroup, yAxisTickValues, yourScore, yScale, dontAnimateIn ? 0 : speed, onClick)

  //Draw faces
  /*
  const xValue = props.width - props.margin.left - props.margin.right * 2;
  const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

  drawFaces(chartGroup, milestones, yourScore, highestScore, yScale, xValue, dontAnimateIn ? 0 : speed);
  */
};

d3Chart.destroy = (id) => {
  utils.selectSVG(id).selectAll('g').remove();
};

export default d3Chart;
