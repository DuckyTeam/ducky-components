import d3 from 'd3';
import utils from './../utils';
import styles from './styles.css';
const d3Chart = {};
const paths = {
  leaf: "M544 256c-288 64-355.2 261.44-421.76 426.88l60.48 21.12 30.4-73.6c15.36 5.44 31.36 9.6 42.88 9.6 352 0 448-544 448-544-32 64-256 72-416 104s-224 168-224 232c0 64 56 120 56 120 104-296 424-296 424-296z",
  crown: "M160 512l-64-352 176 224 112-224 112 224 176-224-64 352h-448zM608 608c0 17.673-14.327 32-32 32h-384c-17.673 0-32-14.327-32-32v-32h448v32z",
    faces: [
      "M384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5zM223.5 304.5c0-27 21-48 48-48s48 21 48 48-21 48-48 48-48-21-48-48zM448.5 304.5c0-27 21-48 48-48s48 21 48 48-21 48-48 48-48-21-48-48zM288 448.5h192v48h-192v-48z",
      "M384 511.5c48 0 88.5-25.5 111-63h52.5c-25.5 66-88.5 111-163.5 111s-138-45-163.5-111h52.5c22.5 37.5 63 63 111 63zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5zM223.5 304.5c0-27 21-48 48-48s48 21 48 48-21 48-48 48-48-21-48-48zM448.5 304.5c0-27 21-48 48-48s48 21 48 48-21 48-48 48-48-21-48-48z",
      "M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM271.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM496.5 352.5c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z",
      "M384 559.5c-75 0-138-45-163.5-111h327c-25.5 66-88.5 111-163.5 111zM283.5 318l-33 34.5-34.5-34.5 67.5-67.5 69 67.5-34.5 34.5zM415.5 318l69-67.5 67.5 67.5-34.5 34.5-33-34.5-34.5 34.5zM384 640.5c141 0 256.5-115.5 256.5-256.5s-115.5-256.5-256.5-256.5-256.5 115.5-256.5 256.5 115.5 256.5 256.5 256.5zM384 64.5c177 0 319.5 142.5 319.5 319.5s-142.5 319.5-319.5 319.5-319.5-142.5-319.5-319.5 142.5-319.5 319.5-319.5z"
    ],
    check: "M288 517.5l339-339 45 45-384 384-178.5-178.5 45-45z"
};

d3Chart.create = (el, props, state, formatting) => {
  props.xAxisOffset = props.height + props.margin.top + 5;
  console.log(props.xAxisOffset)
  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props);
  utils.drawYAxisGroup(svg, props);
  utils.drawChartGroup(svg, props, styles.lines);
  utils.drawChartGroup(svg, props, styles.areas);
  utils.drawChartGroup(svg, props, styles.dots);
  utils.drawChartGroup(svg, props, styles.bars);
  utils.drawChartGroup(svg, props, styles.faceGroup);

  d3Chart.update(el, state, props, formatting);
};

d3Chart.update = (el, state, props, formatting) => {
    state.height = props.height - props.margin.top - props.margin.bottom;
    state.xAxisOffset = state.height + props.margin.top + 5;
    const speed = 300;

    const maxValue = d3.max(state.data.map(d => d3.max(d.data.map(d => d.value))));

    const nextGoal = () => {
      for (let index = 0; index < state.goals.length; index += 1) {
        if (state.goals[index] > maxValue) {
          return state.goals[index];
        }
      }
      return state.goals[state.goals.length - 1];
    };

    const faceValues = state.goals.map((goal, index) => {
      return index > 0 ? state.goals[index] - (goal - state.goals[index - 1]) / 2 : goal / 2;
    }).slice(0, 4);

    const yourScore = state.data.reduce((acc, dp) => {
      return dp.id === state.member ? acc + dp.value : acc;
    }, 0);

    const svg = d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    const xScale = d3.time.scale()
        .range([0, props.width - props.margin.left - props.margin.right])
        .domain([state.startDate, state.endDate]);

    const yScale = d3.scale.linear()
      .domain([0, d3.max([maxValue, nextGoal()])])
      .range([state.height - 4, 15 + props.margin.top]);

    const lineDrawer = d3.svg.line().interpolate("basic")
        .x((d) => xScale(d.date))
        .y((d) => yScale(d.value));

    const areaDrawer = d3.svg.area().interpolate("basic")
        .x(d => xScale(d.date))
        .y0(state.height + props.margin.top)
        .y1(d => yScale(d.value));

    const yAxis = d3
        .svg
        .axis()
        .scale(yScale)
        .tickValues(state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1))
        .tickSize(-props.width, 0, 0)
        .orient("left");

    const xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    // Move xaxis
    utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${state.xAxisOffset})`);

    utils.selectYAxisGroup(svg).transition().duration(speed).delay(speed).call(yAxis);
    utils.selectXAxisGroup(svg).transition().duration(speed).delay(speed).call(xAxis);

    const faces = svg.select(`.${styles.faceGroup}`).selectAll('svg').data(faceValues);

    const enteredFaces = faces.enter();

    enteredFaces.append('svg').attr({
      viewBox: "0 0 768 768",
      x: props.width,
      y: data => yScale(data),
      width: 20,
      height: 20
    }).append('path').attr({
      d: (data, index) => paths.faces[index]
    });
    faces.exit().remove();

    faces.transition().delay(speed).duration(speed).attr({
      x: props.width - 30,
      y: yScale,
    }).select('path')
      .attr({
        class: (data, index) => {
          return (data <= yourScore ? styles[`faceActive${index}`] : styles.faceInactive);
        }
      });

    const lines = svg.select(`.${styles.lines}`).selectAll('path').data(state.data);
    const areas = svg.select(`.${styles.areas}`).selectAll('path').data(state.data);
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
      display: d => state.member === d.id ? true : "none"
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

};

export default d3Chart;
