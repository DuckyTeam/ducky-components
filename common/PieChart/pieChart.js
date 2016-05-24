/* eslint-disable no-invalid-this */
/*
 i can't figure out how to refactor this to not use `this`
 so i'm grandfathering it in here
 */
import d3 from "d3";
const MARGINS = {top: 0, right: 0, bottom: 0, left: 0};
const INNER_RADIUS_MULTIPLIER = 0.6;
const OUTER_RADIUS_MULTIPLIER = 0.9;
const CONTAINER_Y_OFFSET = 20;
const TRANSITION_DURATION = 1000;


/**
 * @param {object} DOMNode: Dom element
 * @param {object} props: properties
 * @return {*}: void
 */
export function createGraph(DOMNode, props) {
    // draw and append the container
    const svg = d3
        .select(DOMNode)
        .select(".pieChart")
        .append("svg")
        .attr("id", "svg")
        .attr("width", props.calwidth)
        .attr("height", props.calheight);
    // set the thickness of the inner and outer radii
    const min = Math.min(props.calwidth, props.calheight);
    const outerRadius = min / 2 * OUTER_RADIUS_MULTIPLIER;
    const innerRadius = min / 2 * INNER_RADIUS_MULTIPLIER;

    // construct default pie laoyut
    const pie = d3.layout.pie().value((svgPathDefinition) => {
        return svgPathDefinition;
    }).sort(null);

    // construct arc generator
    const arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

    // creates the pie chart container
    const xTransform = (props.calwidth / 2 + MARGINS.left);
    const yTransform = (props.calheight / 2 + MARGINS.top);
    const svgGroupContainer = svg.append("g")
        .attr("id", "g")
        .attr("transform", `translate(${xTransform},${yTransform})`);

    // generate data
    const data = [];

    props.data.forEach((svgPathDefinition) => {
        data.push(svgPathDefinition.percentage);
    });
    // enter data and draw pie chart
    svgGroupContainer
    .datum(data)
    .selectAll("path")
    .data(pie)
    .enter()
    .append("path")
    .attr("class", (svgPathDefinition, index) => {
        return `piechart ${props.data[index].label}`;
    })
    .attr("fill", (svgPathDefinition, index) => {
        return props.data[index].color;
    })
    .attr("d", arc)
    .on("mouseover", (svgPathDefinition, index) => {
        d3.select(this).style("fill", "green");
        d3.select("#number").text(`${props.data[index].value} kg`);
        d3.select("#numberLabel").text(`${props.data[index].label}:`);
    })
    .on("mouseout", (svgPathDefinition, index) => {
        d3.select(this).style("fill", () => {
            return props.data[index].color;
        });
        d3.select("#number").text(`${props.total} kg`);
        d3.select("#numberLabel").text("Total:");
    });
}

/**
 * @param {object} DOMNode: Dom element
 * @param {object} props: properties
 * @return {*}: void
 */
export function updateGraph(DOMNode, props) {
    const data = [];

    props.data.forEach((svgPathDefinition) => {
        data.push(svgPathDefinition.percentage);
    });

    const min = Math.min(props.calwidth, props.calheight);

    const outerRadius = min / 2 * OUTER_RADIUS_MULTIPLIER;
    const innerRadius = min / 2 * INNER_RADIUS_MULTIPLIER;
    const arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

    /**
     * Store the displayed angles in _current.
     * Then, interpolate from _current to the new angles.
     * During the transition, _current is updated in-place by d3.interpolate.
     * @param {object} angles: not a clue
     * @returns {object}: unown
     */
    function arcTween(angles) {
        const interpolation = d3.interpolate(this, angles);

        this._current = interpolation(0);
        return (point) => {
            return arc(interpolation(point));
        };
    }

    const pie = d3.layout.pie().value((svgPathDefinition) => {
        return svgPathDefinition;
    }).sort(null);

    // add transition to new path
    d3
    .select(DOMNode)
    .select("#svg")
    .datum(data)
    .selectAll("path")
    .data(pie)
    .transition()
    .duration(TRANSITION_DURATION)
    .attrTween("d", arcTween);

    // add any new paths
    d3
    .select(DOMNode)
    .select("#svg")
    .selectAll("path")
    .data(pie)
    .enter()
    .append("path")
    .attr("class", (svgPathDefinition, index) => {
        return `piechartey ${props.data[index].label}`;
    })
    .attr("d", arc)
    .each((svgPathDefinition) => {
        this._current = svgPathDefinition;
    });
    // remove data not being used
    d3
    .select(DOMNode)
    .select("#svg")
    .selectAll("path")
    .data(pie)
    .exit()
    .remove();
}
