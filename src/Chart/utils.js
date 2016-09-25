import d3 from 'd3';

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

exports.drawXAxisGroup = (svg, props) => {
  return svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", `translate(${props.margin.left}, ${props.xAxisOffset})`);
}

exports.selectYAxisGroup = (svg) => svg.select(`.${styles.yAxis}`);

exports.drawYAxisGroup = (svg, props) => {
  return svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", `translate(0, ${props.margin.top})`);
}

exports.drawChartGroup = (svg, props, styleClass) => {
  return svg.append('g')
        .attr('class', styleClass)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
}
