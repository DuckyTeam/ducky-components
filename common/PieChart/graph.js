import d3 from 'd3';
import styles from './styles.css';
var d3PieChart = {};

var margin = {top: 10, bottom: 40, left: 30, right: 10};
var width, height;

d3PieChart.create = function(el, props, state) {
    width = props.width - margin.left - margin.right;
    height = props.height - margin.top - margin.bottom;
    var svg = d3.select(el).append('svg')
        .attr('class', 'd3')
        .attr('width', props.width)
        .attr('height', props.height);

    this.update(el, state);
};

d3PieChart.update = function(el, state, props) {
    width = props.width - margin.left - margin.right;
    height = props.height - margin.top - margin.bottom;

    //Resize svg-canvas
    d3.select(".d3")
        .attr('width', props.width)
        .attr('height', props.height);

    // Render the data points
    this._drawLines(el, state.data);
};

d3PieChart.destroy = function(el) {
    // Any clean-up would go here
    // in this example there is nothing to do
};

d3PieChart._drawLines = function(el, data) {
    //ENTER

    // ENTER & UPDATE

    // EXIT

};

export default d3PieChart;
