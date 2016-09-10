import d3 from 'd3';
import styles from './styles.css';
const d3Chart = {};

d3Chart.create = (el, props, state) => {
    const xAxisOffset = props.height + props.margin.top + 20;
    const svg = d3
        .select(el)
        .append('svg')
        .attr('class', `d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    d3Chart.update(el, state, props);
};

d3Chart.update = (el, state, props) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 20;
    const speed = 250;

    // Resize svg-canvas
    var svg = d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    // Move xaxis
    d3.select(`.${styles.xAxis}`)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    const xScale = d3.scale.ordinal()
      .domain(state.data.map(d => d.label))
      .rangeBands([0, props.width], 0.15);

    const yScale = d3.scale.linear()
      .domain([0, d3.max(state.data, d => d.value)])
      .range([height, 0]);

    const rects = svg.selectAll("rect").data(state.data);

    rects.enter().append("rect")
      .attr('x', d => xScale(d.label))
      .attr('y', height)
      .attr('height', 0)
      .attr('width', d => xScale.rangeBand())
      .attr('fill', d => d.color)

    rects.exit().transition().duration(speed)
      .attr('y', d => height)
      .attr('height', 0)
      .remove();

    rects.transition().delay(speed).duration(speed)
      .attr('x', d => xScale(d.label))
      .attr('width', d => xScale.rangeBand())
      .attr('fill', d => d.color);


    rects.transition().delay(speed*2)
      .attr('y', d => yScale(d.value))
      .attr('height', d => height - yScale(d.value));

};


export default d3Chart;
