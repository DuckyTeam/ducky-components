import moment from 'moment';
import d3 from 'd3';
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
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 5;

    const svg = d3.select(el).append('svg')
        .attr('class', `d3Chart${props.id} ${styles.svg}`)
        .attr('width', props.width)
        .attr('height', props.height);

    svg.append('g')
        .attr('class', styles.lines)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.areas)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.dots)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.bars)
        .attr("transform", `translate(${props.margin.left}, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.yAxis)
        .attr("transform", `translate(0, ${props.margin.top})`);
    svg.append('g')
        .attr('class', styles.xAxis)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);
    svg.append('g')
        .attr('class', styles.faceGroup);
    svg.append('g')
        .attr('class', styles.yAxisTickValuesGroup);
    svg.append('g')
      .attr('class', styles.textLables);
    svg.append('g')
      .attr('class', styles.yAxisLeader);
    svg.append('g')
      .attr('class', styles.leaderGroup);
    svg.append('g')
      .attr('class', styles.dotSeries);
    svg.append('g')
      .attr('class', styles.pointSeries);

    d3Chart.update(el, state, props, formatting);
};

d3Chart.update = (el, state, props, formatting) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 5;
    const speed = 300;
    const maxValue = d3.max(state.data.map(d => d3.max(d.data.map(d => d.value))));
    const leaderId = state.data.filter((d) => {return d.data[Object.keys(d.data).length - 1].value === maxValue})[0].id;
    const leaderName = state.data.filter((d) => {return d.data[Object.keys(d.data).length - 1].value === maxValue})[0].label;

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
      const index = Object.keys(dp.data).length - 1;

      return dp.id === state.member ? dp.data[index].value + acc : acc;
    }, 0);


    const yAxisTickValues = state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1);
    const svg = d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    const xScale = d3.time.scale()
        .range([15, props.width - props.margin.left - props.margin.right - 35])
        .domain([moment(state.startDate).valueOf(), moment(state.endDate).valueOf()]);


    const yScale = d3.scale.linear()
      .domain([0, d3.max([maxValue, nextGoal()])])
      .range([height - 4, 15]);

    const lineDrawer = d3.svg.line().interpolate("basic")
        .x((d) => xScale(d.date))
        .y((d) => yScale(d.value));

    const areaDrawer = d3.svg.area().interpolate("basic")
        .x(d => xScale(d.date))
        .y0(height)
        .y1(d => yScale(d.value));

    const yAxis = d3
        .svg
        .axis()
        .scale(yScale)
        .tickValues(state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1))
        .tickSize(-props.width, 0, 0)
        .orient("left");

    const yAxisLeader = d3
        .svg
        .axis()
        .scale(yScale)
        .tickValues([maxValue - 30])
        .tickSize(-props.width, 0, 0)
        .orient("left");

   const xAxis = d3.svg.axis()
        .scale(xScale)
        .tickFormat(d3.time.format("%b.%d"))
        .orient("bottom");

    svg.selectAll(`.${styles.yAxis}`).transition().duration(speed).delay(speed).call(yAxis);
    svg.selectAll(`.${styles.xAxis}`).transition().duration(speed).delay(speed).call(xAxis)
      .selectAll('.tick')
      .attr('id', (data) => {
        return moment(data).valueOf() === state.startDate || moment(data).valueOf() === state.endDate ? styles.startEndDates : null;
      });
    svg.selectAll(`.${styles.yAxisLeader}`).transition().duration(speed).delay(speed).call(yAxisLeader);

    const faces = svg.select(`.${styles.faceGroup}`).selectAll('svg').data(faceValues);
    const yAxisTicks = svg.select(`.${styles.yAxisTickValuesGroup}`).selectAll('svg').data(yAxisTickValues);
    const textLables = svg.select(`.${styles.textLables}`).selectAll('text').data(yAxisTickValues);
    const leaderLabel = svg.select(`.${styles.leaderGroup}`).selectAll('svg').data([maxValue + 10]);
    const leaderText = svg.select(`.${styles.leaderGroup}`).selectAll('text').data([maxValue + 10]);

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

      const enteredLeaderLabel = leaderLabel.enter();
      enteredLeaderLabel.append('svg').attr({
        viewBox: "0 0 768 768",
        x: 86,
        y: data => yScale(data),
        width: 40,
        height: 12
      }).append('path').attr({
        d: paths.crown,
        class: styles.leaderLabel
        }
      );
      leaderLabel.exit().remove();

      leaderLabel.transition().delay(speed).duration(speed).attr({
        x: 86,
        y: yScale,
      }).select('path')
        .attr({
          d: paths.crown,
          class: styles.leaderLabel
        });

        const enteredLeaderText = leaderText.enter();
        enteredLeaderText.append('text')
          .text((data) => Number(data - 10).toLocaleString().concat(' (').concat(leaderName).concat(")"))
          .attr({
            x: 120,
            y: data => yScale(data) + 10,
            class: styles.leaderText,
            'font-size': '12px'
          });
        leaderText.exit().remove();

        leaderText.transition().delay(speed).duration(speed)
        .text((data) => Number(data - 10).toLocaleString().concat(' (').concat(leaderName).concat(")"))
        .attr({
          class: styles.leaderText,
          'font-size': '12px',
          y: data => yScale(data) + 10,
          x: 120
        });

      // For y axis tick lables
      const enteredTickValues = yAxisTicks.enter();
      enteredTickValues.append('svg').attr({
        viewBox: "0 0 768 768",
        width: 40,
        height: 12,
        y: data => yScale(data) + 10
      }).append('path').attr({
        d: (data) => {
          return (data <= yourScore) ? paths.check : paths.leaf;
        },
        class: (data) => {
          return (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
        }
      });
      yAxisTicks.exit().remove();
      yAxisTicks.transition().duration(speed).delay(speed).attr({
        y: data => yScale(data) - 10,
        x: 10
      }).select('path')
      .attr({
        d: (data) => {
          return (data <= yourScore) ? paths.check : paths.leaf;
        },
        class: (data) => {
          return (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
        }
      });

      // For y axis tick text
      const textLablesValues = textLables.enter();

      textLablesValues.append('text')
        .text((data) => Number(data).toLocaleString())
        .attr({
          x: 40,
          y: data => yScale(data),
          class: (data) => {
            return (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText;
          },
          'font-size': '10px'
        });
      textLables.exit().remove();

      textLables.transition().duration(speed).delay(speed)
        .text((data) => Number(data).toLocaleString())
        .attr({
          class: (data) => {
            return (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText;
          },
          'font-size': '10px',
          y: yScale,
          x: 40
        });

    const lines = svg.select(`.${styles.lines}`).selectAll('path').data(state.data);
    const areas = svg.select(`.${styles.areas}`).selectAll('path').data(state.data);
    const dots = svg.select(`.${styles.dotSeries}`).data(state.data);
    const points = svg.select(`.${styles.pointSeries}`).selectAll(".point").data(state.data);

    const getStrokeColor = (data) => {
      if (data.id === leaderId) {
        return '#FFC107';
      } else if (data.id === state.member) {
        return '#00ab97';
      }
      return '#90A4AE';
    };

    const getStrokeWidth = (data) => {
      if (data.id === state.member || data.id === state.selected) {
        return 4;
      }
      return 2;
    };

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
          .attr("fill", (d) => {
            getStrokeWidth(d)
          })
          .attr("stroke", (d) => getStrokeColor(d));

    // ENTER & UPDATE
    lines.attr({
      d: d => lineDrawer(d.data),
      stroke: (d) => getStrokeColor(d),
      "stroke-width": (d) => getStrokeWidth(d)
    });

    areas.attr({
      d: d => areaDrawer(d.data),
      display: d => state.member === d.id ? true : "none"
    });


    enteredPoints.append("circle").attr({
      class: styles.points,
      r: 4.5,
      cx: 65,
      cy: d => yScale(0) + 10
    });

    dots
        .attr("class", styles.pointSeries)
        .attr("stroke-width", 2)
        .attr("fill", (d) => {
          getStrokeWidth(d)})
        .attr("stroke", (d) => getStrokeColor(d));


    // EXIT
    lines.exit().remove();
    areas.exit().remove();
    points.exit().remove();
    dots.exit().remove();

};

export default d3Chart;
