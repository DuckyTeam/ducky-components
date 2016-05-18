import d3 from 'd3';
import styles from './styles.css';
var d3Chart = {};

var margin = {top: 10, bottom: 40, left: 30, right: 10};
var width, height;

var isLast = function(d, scale) {
    return d.toString() === scale.domain()[1].toString();
};

var isFirst = function(d, scale) {
    return d.toString() === scale.domain()[0].toString();
};

d3Chart.create = function(el, props, state, formatting) {
    width = props.width - margin.left - margin.right;
    height = props.height - margin.top - margin.bottom;
    var xAxisOffset = height + margin.top + 20;
    var svg = d3.select(el).append('svg')
        .attr('class', 'd3')
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', 'lines')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append('g')
        .attr('class', 'area')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append('g')
        .attr('class', 'dots')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append('g')
        .attr('class', styles.bars)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", "translate(" + (margin.left*2) + "," + margin.top + ")");
    svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", "translate(" + margin.left + "," + xAxisOffset + ")");

    this.update(el, state, formatting);
};

d3Chart.update = function(el, state, props, formatting) {
    width = props.width - margin.left - margin.right;
    height = props.height - margin.top - margin.bottom;

    //Resize svg-canvas
    d3.select(".d3")
        .attr('width', props.width)
        .attr('height', props.height);

    //Move xaxis
    var xAxisOffset = height + margin.top + 20;
    d3.select("."+styles.xAxis).attr("transform", "translate(" + margin.left + "," + xAxisOffset + ")");

    // Re-compute the scales, and render the data points
    var scales = this._scales(el, state.domain);
    this._drawLines(el, scales, state.data, formatting);
};

d3Chart.destroy = function(el) {
    // Any clean-up would go here
    // in this example there is nothing to do
};

d3Chart._drawLines = function(el, scales, data, formatting) {
    var g = d3.select(el).selectAll('.lines');
    var ga = d3.select(el).selectAll('.area');
    var gd = d3.select(el).selectAll('.dots');

    var xAxisTicks = function(d, i) {
        var point = d.toString();
        var last = scales.x.domain()[1].toString();
        var numberOfTicks = width/60;
        var numberOfPoints = (scales.x.domain()[1] - scales.x.domain()[0])/(1000*60*60*24);
        if(i === 0 || last === point ||
            (i % Math.ceil(numberOfPoints/numberOfTicks) === 0
                && (i*60*numberOfTicks/numberOfPoints) < (width-50))) {
            return formatting(d);
        }
        return null;
    };

    var lineDrawer = d3.svg.line().interpolate("basic")
        .x(function(d) { return scales.x(d.date); })
        .y(function(d) { return scales.y(d.value); });

    var areaDrawer = d3.svg.area().interpolate("basic")
        .x(function(d) { return scales.x(d.date); })
        .y0(height + margin.top)
        .y1(function(d) { return scales.y(d.value); });

    var yAxis = d3.svg.axis()
        .scale(scales.y)
        .ticks(7)
        .outerTickSize(2)
        .tickFormat(function(d) { return (d===0) ? "" : d; })
        .orient("left");

    var xAxis = d3.svg.axis()
        .scale(scales.x)
        .ticks(d3.time.day)
        .tickFormat(xAxisTicks)
        .orient("bottom");

    d3.select(el).selectAll("." + styles.yAxis).call(yAxis);
    d3.select(el).selectAll("." + styles.xAxis).call(xAxis);

    d3.select(el).selectAll("g.tick")
        .filter(function(d) {
            var point = d.toString();
            var domain = scales.x.domain();
            return point===domain[0].toString() || point===domain[1].toString();
        })
        .attr("class", "tick " + styles.startEndDates);

    var line = g.selectAll("." + styles.line)
        .data(data);

    var area = ga.selectAll('.' + styles.area)
        .data(data);

    var dots = gd.selectAll("." + styles.pointSeries)
        .data(data);

    // ENTER
    line.enter().append('path')
        .attr('class', styles.line);
    area.enter().append('path')
        .attr('class', styles.area);
    dots.enter().append("g")
        .attr("class", styles.pointSeries)
        .attr("stroke-width", 2)
        .attr("fill", function(d) {
            return d.strokeColor;
        })
        .attr("stroke", function(d) {
            return d.strokeColor;
        });

    // ENTER & UPDATE
    line
        .attr("d", function(d) { return lineDrawer(d.data); })
        .attr("stroke", function(d) { return d.strokeColor; } )
        .attr("stroke-width", function(d) { return d.strokeWidth; } );
    area
        .attr("d", function(d) { return areaDrawer(d.data); })
        .attr("display", function(d) { return d.area ? true : "none"; });

    var points = gd.selectAll('.' + styles.pointSeries).selectAll(".point")
        .data(function(d) { return d.data; });

    points.enter().append("circle")
        .attr("class", "point")
    points
        .attr("r", 4.5)
        .attr("cx", function(d) { return scales.x(d.date); })
        .attr("cy", function(d) { return scales.y(d.value); });

    // EXIT
    line.exit()
        .remove();
    area.exit()
        .remove();
    points.exit().remove();
    dots.exit().remove();



};

d3Chart._scales = function(el, domain) {
    if (!domain) {
        return null;
    }

    var x = d3.time.scale()
        .range([margin.left, width - margin.right])
        .domain(domain.x);

    var y = d3.scale.linear()
        .range([height + margin.top, margin.top])
        .domain(domain.y);

    return {x: x, y: y};
};

export default d3Chart;
