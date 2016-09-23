import d3 from 'd3';
import styles from './styles.css';
const d3Chart = {};

d3Chart.create = (el, props, state, formatting) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 5;

    const svg = d3.select(el).append('svg')
        .attr('class', `d3Chart${props.id} ${styles.svg}`)
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', 'lines')
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', 'area')
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', 'dots')
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.bars)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", `translate(0, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    d3Chart.update(el, state, props, formatting);
};

d3Chart.update = (el, state, props, formatting) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 5;
    const speed = 300;

    const maxValue = d3.max(state.data.map(d => d3.max(d.data.map(d => d.value))));

    const svg = d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    const xScale = d3.time.scale()
        .range([0, props.width - props.margin.left - props.margin.right])
        .domain([state.startDate, state.endDate]);

    const yScale = d3.scale.linear()
        .range([height - 4, 15])
        .domain([maxValue, 0]);

    const lineDrawer = d3.svg.line().interpolate("basic")
        .x((d) => xScale(d.date))
        .y((d) => yScale(d.value));

    const areaDrawer = d3.svg.area().interpolate("basic")
        .x(d => xScale(d.date))
        .y0(height + props.margin.top)
        .y1(d => yScale(d.value));

    const yAxis = d3.svg.axis()
        .scale(yScale)
        .ticks(7)
        .outerTickSize(2)
        .orient("left");

    const xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    svg.selectAll(`.${styles.yAxis}`).transition().duration(speed).delay(speed).call(yAxis);
    svg.selectAll(`.${styles.xAxis}`).transition().duration(speed).delay(speed).call(xAxis);

    /*const lines = svg.select(`.${styles.line}`).selectAll('path').data(state.data);
    const areas = svg.select(`.${styles.area}`).selectAll('path').data(state.data);
    const dots = svg.select(`.${styles.pointSeries}`).data(state.data);
    const points = svg.select(`.${styles.pointSeries}`).selectAll(".point").data(state.data);

    // ENTER
    const enteredLines = lines.enter();
    const enteredAreas = areas.enter();
    const enteredDots = dots.enter();
    const enteredPoints = points.enter();

    enteredLines.append('path')
        .attr('class', styles.line);

    enteredAreas.append('path')
        .attr('class', styles.area);

    enteredDots.append("g")
      .attr("class", styles.pointSeries)
      .attr("stroke-width", 2)
      .attr("fill", (d) => d.strokeColor)
      .attr("stroke", (d) => d.strokeColor);

    // ENTER & UPDATE
    lines.attr({
      d: d => lineDrawer(d.data),
      stroke: (d) => d.strokeColor,
      "stroke-width": (d) => d.strokeWidth
    });

    areas.attr({
      d: d => areaDrawer(d.data),
      display: (d) => d.area ? true : "none"
    });


    enteredPoints.append("circle").attr({
      class: 'points',
      r: 4.5,
      cx: d => xScale(d.date),
      cy: d => yScale(d.value),

    });


    // EXIT
    lines.exit().remove();
    areas.exit().remove();
    points.exit().remove();
    dots.exit().remove();
*/
};

export default d3Chart;
