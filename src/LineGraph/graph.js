import d3 from 'd3';
import styles from './styles.css';
const d3Chart = {};

d3Chart.create = (el, props, state, formatting) => {
    const xAxisOffset = props.height + props.margin.top + 20;
    const svg = d3
        .select(el)
        .append('svg')
        .attr('class', `d3Chart${props.id}`)
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
        .attr("transform", `translate(${props.margin.left * 2}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    d3Chart.update(el, state, props, formatting);
};

d3Chart.update = (el, state, props, formatting) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 20;

    // Resize svg-canvas
    d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    // Move xaxis
    d3.select(`.${styles.xAxis}`)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    // Re-compute the scales, and render the data points
    const scales = d3Chart._scales(el, props, state.domain);

    d3Chart._drawLines(el, scales, props, state.data, formatting);
};

d3Chart.destroy = () => {
    // Any clean-up would go here
    // in this example there is nothing to do
};

d3Chart._drawLines = (el, scales, props, data, formatting) => {
    const width = props.width - props.margin.left - props.margin.right;
    const height = props.height - props.margin.top - props.margin.bottom;
    const gl = d3.select(el).selectAll('.lines');
    const ga = d3.select(el).selectAll('.area');
    const gd = d3.select(el).selectAll('.dots');

    const xAxisTicks = (xad, index) => {
        const point = xad.toString();
        const last = scales.xScale.domain()[1].toString();
        const numberOfTicks = width / 60;
        const numberOfPoints =
            (scales.xScale.domain()[1] - scales.xScale.domain()[0]) / (1000 * 60 * 60 * 24);

        if (index === 0 || last === point ||
            (index % Math.ceil(numberOfPoints / numberOfTicks) === 0 &&
                (index * 60 * numberOfTicks / numberOfPoints) < (width - 50))) {
            return formatting(xad);
        }

        return null;
    };

    const lineDrawer = d3
        .svg
        .line()
        .interpolate("basic")
        .x((ld) => scales.xScale(ld.date))
        .y((ld) => scales.yScale(ld.value));

    const areaDrawer = d3
        .svg
        .area()
        .interpolate("basic")
        .x((ad) => scales.xScale(ad.date))
        .y0(height + props.margin.top)
        .y1((ad) => scales.yScale(ad.value));

    const yAxis = d3
        .svg
        .axis()
        .scale(scales.yScale)
        .ticks(7)
        .outerTickSize(2)
        .tickFormat((dtp) => {
            return (dtp === 0) ? "" : dtp;
        })
        .orient("left");

    const xAxis = d3
        .svg
        .axis()
        .scale(scales.xScale)
        .ticks(d3.time.day)
        .tickFormat(xAxisTicks)
        .orient("bottom");

    d3.select(el).selectAll(`.${styles.yAxis}`).call(yAxis);
    d3.select(el).selectAll(`.${styles.xAxis}`).call(xAxis);

    d3.select(el).selectAll("g.tick")
        .filter((dt) => {
            const point = dt.toString();
            const domain = scales.xScale.domain();

            return point === domain[0].toString() || point === domain[1].toString();
        })
        .attr("class", `tick ${styles.startEndDates}`);

    const line = gl.selectAll(`.${styles.line}`)
        .data(data);

    const area = ga.selectAll(`.${styles.area}`)
        .data(data);

    const dots = gd.selectAll(`.${styles.pointSeries}`)
        .data(data);

    // ENTER
    line.enter().append('path')
        .attr('class', styles.line);
    area.enter().append('path')
        .attr('class', styles.area);
    dots
    .enter()
    .append("g")
    .attr("class", styles.pointSeries)
    .attr("stroke-width", 2)
    .attr("fill", (dfc) => dfc.strokeColor)
    .attr("stroke", (dsc) => dsc.strokeColor);

    // ENTER & UPDATE
    line
        .attr("d", (lined) => lineDrawer(lined.data))
        .attr("stroke", (stroked) => stroked.strokeColor)
        .attr("stroke-width", (swd) => swd.strokeWidth);
    area
        .attr("d", (dd) => areaDrawer(dd.data))
        .attr("display", (disd) => {
            return disd.area ? true : "none";
        });

    const points = gd.selectAll(`.${styles.pointSeries}`).selectAll(".point")
        .data((dd) => dd.data);

    points.enter()
        .append("circle")
        .attr("class", "point");
    points
        .attr("r", 4.5)
        .attr("cx", (dd) => scales.xScale(dd.date))
        .attr("cy", (dd) => scales.yScale(dd.value));

    // EXIT
    line.exit()
        .remove();
    area.exit()
        .remove();
    points.exit().remove();
    dots.exit().remove();
};

d3Chart._scales = (el, props, domain) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const width = props.width - props.margin.left - props.margin.right;

    if (!domain) {
        return null;
    }

    const xScale = d3.time.scale()
        .range([props.margin.left, width - props.margin.right])
        .domain(domain.xDomain);

    const yScale = d3.scale.linear()
        .range([height + props.margin.top, props.margin.top])
        .domain(domain.yDomain);

    return {xScale, yScale};
};

export default d3Chart;
