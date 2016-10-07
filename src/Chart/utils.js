import d3 from 'd3';
import moment from 'moment';

import styles from './utils.css';

exports.selectSVG = id => d3.select(`.d3Chart${id}`);

exports.drawSVG = (el, props) => {
  return d3
        .select(el)
        .append('svg')
        .attr('class', `d3Chart${props.id} ${styles.svg}`)
        .attr('width', props.width)
        .attr('height', props.height);
}

exports.selectXAxisGroup = (svg) => svg.select(`.${styles.xAxis}`);

exports.drawXAxisGroup = (svg, props, hover) => {
  const hoverClass = hover ? styles.hover : '';
  return svg.append('g')
        .attr('class', `${styles.xAxis} ${hoverClass}`)
        .attr("transform", `translate(${props.margin.left}, ${props.xAxisOffset})`);
}

exports.selectYAxisGroup = (svg) => svg.select(`.${styles.yAxis}`);

exports.drawYAxisGroup = (svg, props) => {
  return svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", `translate(0, ${props.margin.top})`);
}

exports.getChartGroup = (svg, styleClass) => svg.select(`.${styleClass}`);

exports.drawChartGroup = (svg, props, styleClass) => {
  return svg.append('g')
        .attr('class', styleClass)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
}

exports.getDateTicks = (from, to, number) => {
  let dates = []
  let current = moment(from);
  while (moment(current).isBefore(moment(to))) {
    dates.push(new Date(current))
    current = moment(current).add(1, 'days');
  }
  const eachN = Math.ceil(dates.length / number);
  let returnDates = [];
  for (let i = 0; i < number; i++) {
    returnDates.push(dates[i*eachN]);
  }
  if (returnDates[returnDates.length - 1] !== dates[dates.length - 1]) {
    returnDates.pop();
    returnDates.push(dates[dates.length - 1]);
  }
  return returnDates;
}
