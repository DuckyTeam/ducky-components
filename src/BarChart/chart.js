import d3 from 'd3';
import styles from './styles.css';
const d3Chart = {};

d3Chart.create = (el, props, state) => {
    const xAxisOffset = props.height + props.margin.top;
    const svg = d3
        .select(el)
        .append('svg')
        .attr('class', `d3Chart${props.id} ${styles.svg}`)
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', styles.bars)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    d3Chart.update(el, state, props);
};

d3Chart.update = (el, state, props) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top;
    const speed = 250;
    const textPadding = 3;
    const barTextFontSize = 20;

    // Resize svg-canvas
    var svg = d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    // Move xaxis
    d3.select(`.${styles.xAxis}`)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    const xScale = d3.scale.ordinal()
      .domain(state.data.map(d => d.label))
      .rangeBands([0, props.width - props.margin.left - props.margin.right], 0.67);

    const yScale = d3.scale.linear()
      .domain([0, d3.max(state.data, d => d.value)])
      .range([height, xScale.rangeBand() + barTextFontSize + textPadding*2]); //Make sure all the stuff on top of graph actually fits inside canvas

    const xAxis = d3
        .svg
        .axis()
        .scale(xScale)
        .orient("bottom");

    const yAxis = d3
        .svg
        .axis()
        .scale(yScale)
        .orient("left");

    const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data);

    //Transition in new axis
    svg.selectAll(`.${styles.yAxis}`).transition().duration(speed).delay(speed).call(yAxis);
    svg.selectAll(`.${styles.xAxis}`).transition().duration(speed).delay(speed).call(xAxis);

    //Enter new reactangles and set them to height 0
    var entered = rects.enter().append("g")
    entered.append("rect")
      .attr('class', styles.rectangle)
      .attr('rx', 2)
      .attr('x', d => xScale(d.label))
      .attr('y', height)
      .attr('height', 0)
      .attr('width', d => xScale.rangeBand())
      .attr('fill', d => d.color);

    entered.append('image').attr({
        "xlink:href": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Compass_card_(de).svg",
        width: d => xScale.rangeBand(),
        height: d => xScale.rangeBand(),
        x: d => xScale(d.label),
        y: d => height,
        opacity: 0
      });

    entered.append('text')
      .attr({
        class: styles.barText,
        text: d => d.value,
        x: d => xScale(d.label) + 0.5*xScale.rangeBand(),
        y: d => height,
        width: d => xScale.rangeBand(),
        height: d => xScale.rangeBand()
      });

    //Remove unnessescary rectangles
    rects.exit().transition().duration(speed)
      .attr('y', d => height)
      .attr('height', 0)
      .remove();

    //Transition the x position after removing rectangles
    var transX = rects.transition().delay(speed).duration(speed);

    transX.select("rect")
      .attr('x', d => xScale(d.label))
      .attr('width', d => xScale.rangeBand())
      .attr('fill', d => d.color);

    transX.select("image")
      .attr({
          x: d => xScale(d.label)
        });

    transX.select("text")
    .text(d => d.value)
    .attr({
        'font-size': barTextFontSize,
        x: d => xScale(d.label) + 0.5*xScale.rangeBand()
      });

    //Transition the y position after x position
    var transY = rects.transition().delay(speed*2)

    transY.select("rect")
      .attr('y', d => yScale(d.value))
      .attr('height', d => height - yScale(d.value));

    transY.select("image")
      .attr({
        y: d => yScale(d.value) - xScale.rangeBand() - 2*textPadding - barTextFontSize,
        width: d => xScale.rangeBand(),
        height: d => xScale.rangeBand(),
        opacity: 1
      });

    transY.select("text")
      .text(d => d.value)
      .attr({
        y: d => yScale(d.value) - textPadding
      });


};


export default d3Chart;
