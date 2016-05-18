import d3 from 'd3';
import styles from './styles.css';
var d3Chart = {};

d3Chart.margin = {top: 10, bottom: 40, left: 30, right: 10};
d3Chart.width;
d3Chart.height;

var isLast = function(d, scale) {
    return d.toString() === scale.domain()[1].toString();
};

var isFirst = function(d, scale) {
    return d.toString() === scale.domain()[0].toString();
};

d3Chart.create = function(el, props, state, formatting) {
    this.width = props.width - this.margin.left - this.margin.right;
    this.height = props.height - this.margin.top - this.margin.bottom;
    var xAxisOffset = this.height + this.margin.top + 20;
    console.log(props);
    var svg = d3.select(el).append('svg')
        .attr('class', 'd3Line')
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', 'lines')
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    svg.append('g')
        .attr('class', 'area')
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    svg.append('g')
        .attr('class', 'dots')
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    svg.append('g')
        .attr('class', styles.bars)
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", "translate(" + (this.margin.left*2) + "," + this.margin.top + ")");
    svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", "translate(" + this.margin.left + "," + xAxisOffset + ")");

    this.update(el, state, formatting);
};

d3Chart.update = function(el, state, props, formatting) {
   this.width = props.width - this.margin.left - this.margin.right;
   this.height = props.height - this.margin.top - this.margin.bottom;
    console.log(props);
    //Resize svg-canvas
    d3.select(".d3Line")
        .attr('width', props.width)
        .attr('height', props.height);

    //Move xaxis
    var xAxisOffset =this.height + this.margin.top + 20;
    d3.select("."+styles.xAxis).attr("transform", "translate(" + this.margin.left + "," + xAxisOffset + ")");

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
        var numberOfTicks =this.width/60;
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
        .y0(this.height + this.margin.top)
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
        .range([this.margin.left,this.width - this.margin.right])
        .domain(domain.x);

    var y = d3.scale.linear()
        .range([this.height + this.margin.top, this.margin.top])
        .domain(domain.y);

    return {x: x, y: y};
};

export default d3Chart;
