import d3 from 'd3';
import styles from './styles.css';
var d3Chart = {};

var margin = {top: 10, bottom: 10, left: 30, right: 10};

d3Chart.create = function(el, props, state) {
    var width = props.width - margin.left - margin.right;
    var height = props.height - margin.top - margin.bottom;
    var svg = d3.select(el).append('svg')
        .attr('class', 'd3')
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', 'lines')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append('g')
        .attr('class', 'yAxis')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.update(el, state);
};

d3Chart.update = function(el, state) {
    // Re-compute the scales, and render the data points
    var scales = this._scales(el, state.domain);
    this._drawLines(el, scales, state.data);
};

d3Chart.destroy = function(el) {
    // Any clean-up would go here
    // in this example there is nothing to do
};

d3Chart._drawLines = function(el, scales, data) {
    var g = d3.select(el).selectAll('.lines');

    var lineDrawer = d3.svg.line().interpolate("basic")
        .x(function(d) { return scales.x(d.date) })
        .y(function(d) { return scales.y(d.value) });

    var yAxis = d3.svg.axis()
        .scale(scales.y)
        .ticks(4)
        .orient("left");

    d3.select(el).selectAll('.yAxis').call(yAxis);


    var line = g.selectAll("." + styles.line)
        .data(data);

    // ENTER
    line.enter().append('path')
        .attr('class', styles.line);

    // ENTER & UPDATE
    line
        .attr("d", function(d) { return lineDrawer(d.data); })
        .attr("stroke", function(d) { return d.color; } );

    // EXIT
    line.exit()
        .remove();
};

d3Chart._scales = function(el, domain) {
    if (!domain) {
        return null;
    }

    var width = el.offsetWidth;
    var height = el.offsetHeight;

    var x = d3.scale.linear()
        .range([10, width-20])
        .domain(domain.x);

    var y = d3.scale.linear()
        .range([height-20, 10])
        .domain(domain.y);

    return {x: x, y: y};
};

export default d3Chart;