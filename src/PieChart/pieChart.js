/* eslint-disable no-invalid-this */
/*
 i can't figure out how to refactor this to not use `this`
 so i'm grandfathering it in here
 */
import d3 from "d3";
const MARGINS = {top: 0, right: 0, bottom: 0, left: 0};
const INNER_RADIUS_MULTIPLIER = 0.8;
const OUTER_RADIUS_MULTIPLIER = 1;
const PADDING = 0.03;

/**
 * @param {object} DOMNode: Dom element
 * @param {object} props: properties
 * @return {*}: void
 */
export function updateGraph(DOMNode, props) {
    const min = Math.min(props.calwidth, props.calheight);
    const outerRadius = min / 2 * OUTER_RADIUS_MULTIPLIER;
    const innerRadius = min / 2 * INNER_RADIUS_MULTIPLIER;

    const svg = d3.select(DOMNode).select("svg");

    const pie = d3
        .layout
        .pie()
        .value((data) => {
            return data.percentage;
        })
        .sort(null)
        .padAngle(PADDING);

    // construct arc generator
    const arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

    let path = svg.select("g").selectAll("path");

    path = path.data(pie(props.data), (data) => {
        return data.value;
    });
    path.enter()
        .append("path")
        .attr("fill", (data) => {
            return data.data.color;
        });
    path.exit().remove();
    path.attr("d", arc);
}

/**
 * @param {object} DOMNode: Dom element
 * @param {object} props: properties
 * @return {*}: void
 */
export function createGraph(DOMNode, props) {
    // draw and append the container
    const svg = d3
        .select(DOMNode)
        .append("svg")
        .attr("id", "svg")
        .attr("width", props.calwidth)
        .attr("height", props.calheight);

    // creates the pie chart container
    const xTransform = (props.calwidth / 2 + MARGINS.left);
    const yTransform = (props.calheight / 2 + MARGINS.top);

    svg.append("g")
        .attr("id", "g")
        .attr("transform", `translate(${xTransform},${yTransform})`);

    // enter data and draw pie chart
    updateGraph(DOMNode, props);
}
