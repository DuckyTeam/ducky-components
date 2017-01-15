/* eslint-disable no-invalid-this */
/*
 i can't figure out how to refactor this to not use `this`
 so i'm grandfathering it in here
 */
import { select, selectAll } from 'd3-selection';
import { pie, arc } from 'd3-shape';
import { interpolate } from 'd3-interpolate';
import { transition } from 'd3-transition';

const MARGINS = {top: 0, right: 0, bottom: 0, left: 0};
const INNER_RADIUS_MULTIPLIER = 0.8;
const OUTER_RADIUS_MULTIPLIER = 1;
const PADDING = 0.03;
const TEXT_SIZE = 32;
let currentData = [];
let graph = null;
let pieChart = null;
let arcChart = null;

function makeData(data) {
    return data.map(el => el.percentage);
}

function render(props) {
    // Store the displayed angles in _current.
    // Then, interpolate from _current to the new angles.
    // During the transition, _current is updated in-place by d3.interpolate.
    function arcTween(newData, index) {
        const updatedData = interpolate(currentData[index], newData);

        currentData[index] = updatedData(0);
        return (time) => {
            return arcChart(updatedData(time));
        };
    }
    const data = makeData(props.data);

    // add transition to new path
    graph
    .datum(data)
    .selectAll("path")
    .data(pieChart)
    .transition()
    .duration(1000)
    .attrTween("d", arcTween);
    // add any new paths
    graph
    .datum(data)
    .selectAll("path")
    .data(pieChart)
    .enter()
    .append("path")
    .attr("class", "piechart")
    .attr("fill", (fillData, index) => {
        return props.data[index].color;
    })
    .attr("d", arcChart)
    .each((pieData) => {
        currentData.push(eachData);
    });
    // remove data not being used
    graph
    .datum(data)
    .selectAll("path")
    .data(pieChart)
    .exit()
    .remove();
}

export function updateGraph(DOMNode, props) {
    render(props);
}

export function createGraph(DOMNode, props) {
    const width = props.calwidth;
    const height = props.calheight;
    // draw and append the container
    const svg = select(DOMNode).append("svg")
      .attr("width", width).attr("height", height);

    // construct default pie laoyut
    pieChart = pie()
      .value((data) => {
          return data;
      })
      .sort(null)
      .padAngle(PADDING);
    // creates the pie chart container
    graph = svg.append('g')
      .attr('transform', () => {
          return `translate(${width / 2}, ${height / 2})`;
      });

    const data = makeData(props.data);

    // set the thickness of the inner and outer radii
    const min = Math.min(width, height);
    const oRadius = min / 2 * OUTER_RADIUS_MULTIPLIER;
    const iRadius = min / 2 * INNER_RADIUS_MULTIPLIER;

    // construct arc generator
    arcChart = arc()
        .outerRadius(oRadius)
        .innerRadius(iRadius);

    // enter data and draw pie chart
    graph
      .datum(data)
      .selectAll("path")
      .data(pieChart)
      .enter()
      .append("path")
      .attr("class", "piechart")
      .attr("fill", (fillData, index) => {
          return props.data[index].color;
      })
      .attr("d", arcChart)
      .each((eachData) => {
          currentData.push(eachData);
      });

      /*svg.append('g')
        .append('text')
          .attr('text-anchor', 'middle')
          .attr('x', props.calwidth / 2)
          .attr('y', props.calheight / 2 + TEXT_SIZE / 2)
          .text(props.total);*/

    render(props);
}
