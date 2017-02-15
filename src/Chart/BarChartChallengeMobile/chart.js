import { min, max } from 'd3-array';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

import styles from './styles.css';
import utils from './../utils';
import paths from './../svgpaths';
import drawBars from './drawBarsMobile';
import drawText from './../common/drawStartsInText';
const d3Chart = {};

d3Chart.create = (el, state, props) => {

  const svg = utils.drawSVG(el, props);

  svg.append('g').attr('class', styles.bars);
  svg.append('g').attr('class', styles.daysToStart);

  d3Chart.update(el, state, props, true);
};

d3Chart.update = (el, state, props, dontAnimateIn) => {
  const speed = 250;
  const maxWidthBar = state.maxWidthBar || 24;

  //A lot of calculations, functions and definitions for the chart
  const {
    data,
    memberOf,
    selectedId,
    graphID,
    onClick,
    daysToStart
  } = state;

  const hasStarted = daysToStart <= 0;
  const highestScore = max(data, (data) => data.value);

  const leaderId = state.noLeader ? null : (highestScore === 0) ? -1 : state.data.filter((data) => data.value === max(state.data, data => data.value))[0].id;

  //Define x and y scales
  const xScale = scaleBand()
    .domain(data.map((data) => data.id))
    .range([0, props.width - props.margin.left - props.margin.right])
    .padding(0.1);

  const yScale = scaleLinear()
    .domain([0, highestScore])
    .range([5, props.height]);

  // Resize svg-canvas
  const svg = utils.selectSVG(props.id)
      .attr('width', props.width)
      .attr('height', props.height);

  (hasStarted)
    ? drawBars(svg, data, xScale, yScale, props.height, leaderId, speed, memberOf, selectedId, onClick, styles)
    : drawText(
      utils.getChartGroup(svg, styles.daysToStart),
      daysToStart,
      props.height - 13,
      props.width - props.margin.left - props.margin.right,
      styles.daysToStartMobile
    );
};

d3Chart.destroy = (id) => {
  utils.selectSVG(id).selectAll('g').remove();
};

export default d3Chart;
