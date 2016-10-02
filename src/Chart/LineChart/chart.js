import d3 from 'd3';
import moment from 'moment';
import utils from './../utils';
import styles from './styles.css';
import paths from './../svgpaths';
import drawFaces from './../common/drawFaces';
import drawLabels from './../common/drawGoalLabels';
const d3Chart = {};

d3Chart.create = (el, props, state, formatting) => {
  props.xAxisOffset = props.height + props.margin.top + 5;
  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props);
  utils.drawYAxisGroup(svg, props);
  utils.drawChartGroup(svg, props, styles.lines);
  utils.drawChartGroup(svg, props, styles.areas);
  utils.drawChartGroup(svg, props, styles.pointSeries);
  utils.drawChartGroup(svg, props, styles.labels);
  utils.drawChartGroup(svg, props, styles.faceGroup);
  utils.drawChartGroup(svg, props, styles.leaderLine);
  utils.drawChartGroup(svg, props, styles.leaderGroup);
  d3Chart.update(el, state, props, formatting);
};

d3Chart.update = (el, state, props, formatting) => {
    state.height = props.height - props.margin.top - props.margin.bottom;
    state.xAxisOffset = state.height + props.margin.top + 5;
    const speed = 300;
    const maxValue = d3.max(state.data.map(d => d3.max(d.data.map(d => d.value))));
    let leaderId;
    let leaderName;
    [leaderId, leaderName] = state.data.reduce((acc, d) => {
      return d.data[d.data.length - 1].value === maxValue ? [d.id, d.label] : acc;
    }, [-1, '']);
    const nextGoal = () => {
      for (let index = 0; index < state.goals.length; index += 1) {
        if (state.goals[index] > maxValue) {
          return state.goals[index];
        }
      }
      return state.goals[state.goals.length - 1];
    };

    const dotData = state.data.reduce((acc, line) => {
      let newData = [line.data[0], line.data[d3.max([line.data.length - 1, 0])]];
      newData[0].id = line.id;
      newData[1].id = line.id;
      return acc.concat(newData.slice(line.id !== state.member));
    }, []);

    const yourScore = state.data.reduce((acc, dp) => {
      return dp.id === state.member ? acc + dp.data[dp.data.length - 1].value : acc;
    }, 0);

    const getPointClass = d => {
      if (d.id === leaderId) { return `${styles.leaderPoints} ${styles.pointSeries}`; }
      if (d.id === state.member) { return `${styles.yourPoints} ${styles.pointSeries}`; }
      return styles.pointSeries;
    }

    const svg = utils.selectSVG(props.id)
          .attr('width', props.width)
          .attr('height', props.height);

    const xScale = d3.time.scale()
        .range([40, props.width - props.margin.left - props.margin.right - 40])
        .domain([moment(state.startDate), moment(state.endDate)]);

    const yScale = d3.scale.linear()
      .domain([0, d3.max([maxValue, nextGoal()])])
      .range([state.height - 4, 15 + props.margin.top]);

    const lineDrawer = d3.svg.line().interpolate("basic")
        .x((d) => xScale(moment(d.date)))
        .y((d) => yScale(d.value));

    const lineDrawerZero = d3.svg.line().interpolate("basic")
        .x((d) => xScale(moment(d.date)))
        .y(state.height);

    const areaDrawer = d3.svg.area().interpolate("basic")
        .x(d => xScale(moment(d.date)))
        .y0(state.height)
        .y1(d => yScale(d.value));

    const areaDrawerZero = d3.svg.area().interpolate("basic")
        .x(d => xScale(moment(d.date)))
        .y0(state.height)
        .y1(state.height);

    const yAxis = d3
        .svg
        .axis()
        .scale(yScale)
        .tickValues(state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1))
        .tickSize(-props.width, 0, 0)
        .orient("left");

    const xAxis = d3.svg.axis()
     .scale(xScale)
     .tickFormat(d3.time.format("%b.%d %Hh"))
     .orient("bottom");

     const yAxisLeader = d3
     .svg
     .axis()
     .scale(yScale)
     .tickValues([maxValue - 30])
     .tickSize(-props.width, 0, 0)
     .orient("left");

    // Move axes
    utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${state.xAxisOffset})`);
    utils.selectYAxisGroup(svg).transition().duration(speed).delay(speed).call(yAxis);
    utils.selectXAxisGroup(svg).transition().duration(speed).delay(speed).call(xAxis);
    utils.selectXAxisGroup(svg).selectAll('.tick')
        .classed(styles.startEndDates, (data, index) => {
            return index === 0 || index === (utils.selectXAxisGroup(svg).selectAll('.tick')[0].length - 1);
      });

    //Draw labels
    const labelGroup = utils.getChartGroup(svg, styles.labels);
    const goals = state.goals.slice(0, state.goals.reduce((acc, goal) => (goal <= maxValue) ? acc + 1 : acc, 0) + 1)

    drawLabels(labelGroup, goals, yourScore, yScale, speed);

    //Draw faces
    const xValue = props.width - props.margin.left - props.margin.right * 2;
    const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

    drawFaces(chartGroup, goals, yourScore, maxValue, yScale, xValue, speed);

    // Draw leader line
    const leaderLine = svg.select(`.${styles.leaderLine}`).selectAll('line').data([maxValue]);

    leaderLine.enter().append('line').attr({
      class: styles.leaderLine,
      x1: -50,
      x2: props.width,
      y1: yScale,
      y2: yScale,
      opacity: 0
    });

    leaderLine.exit().remove();

    leaderLine.transition().delay(speed).duration(speed).attr({
      y1: yScale,
      y2: yScale,
      x1: -50,
      x2: props.width,
      opacity: 1
    }).select('line')
      .attr({
        class: styles.leaderLine,
      });

    // Leader name and value
    const leaderLabel = svg.select(`.${styles.leaderGroup}`).selectAll('svg').data([maxValue + 40]);
    const leaderText = svg.select(`.${styles.leaderGroup}`).selectAll('text').data([maxValue + 40]);

    const enteredLeaderLabel = leaderLabel.enter();
      enteredLeaderLabel.append('svg').attr({
        viewBox: "0 0 768 768",
        x: 86,
        y: state.height,
        width: 40,
        height: 12,
        opacity: 0
      }).append('path').attr({
        d: paths.crown,
        class: styles.leaderLabel
        }
      );
      leaderLabel.exit().remove();

      leaderLabel.transition().delay(speed).duration(speed).attr({
        x: 86,
        y: yScale,
        opacity: 1
      }).select('path')
        .attr({
          d: paths.crown,
          class: styles.leaderLabel
        });

        const enteredLeaderText = leaderText.enter();
        enteredLeaderText.append('text')
          .text((data) => Number(maxValue).toLocaleString().concat(' (').concat(leaderName).concat(")"))
          .attr({
            x: 120,
            y: state.height + 10,
            opacity: 0,
            class: styles.leaderText,
            'font-size': '12px'
          });
        leaderText.exit().remove();

        leaderText.transition().delay(speed).duration(speed)
        .text((data) => Number(maxValue).toLocaleString().concat(' (').concat(leaderName).concat(")"))
        .attr({
          class: styles.leaderText,
          'font-size': '12px',
          y: data => yScale(data) + 10,
          x: 120,
          opacity: 1
        });

    const lines = svg.select(`.${styles.lines}`).selectAll('path').data(state.data);
    const areas = svg.select(`.${styles.areas}`).selectAll('path').data(state.data);
    //const dots = svg.select(`.${styles.dotSeries}`).data(state.data);
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

    enteredLines.append('path')
        .attr({
          class: styles.line,
          d: d => lineDrawerZero(d.data)
        });

    enteredAreas.append('path')
        .attr({
          class: styles.area,
          d: d => areaDrawerZero(d.data)
        });

    // ENTER & UPDATE
    lines.transition().delay(speed).duration(speed).attr({
      d: d => lineDrawer(d.data)
    });

    lines.attr({
      stroke: (d) => getStrokeColor(d),
      "stroke-width": (d) => getStrokeWidth(d)
    });

   areas.transition().delay(speed).duration(speed).attr({
      d: d => areaDrawer(d.data)
    });

    areas.attr({
       display: d => state.member === d.id ? true : "none"
     });

    //Draw points
    const points = svg.select(`.${styles.pointSeries}`).selectAll('circle').data(dotData);
    const enteredPoints = points.enter();

    enteredPoints.append("circle").attr({
      class: styles.pointSeries,
      r:4,
      cx: d => xScale(moment(d.date)),
      cy: state.height,
      class: getPointClass
    });

    points.transition().delay(speed).duration(speed).attr({
      r:4,
      cx: d => xScale(moment(d.date)),
      cy: d => yScale(d.value)
    });

    points.attr({
      class: getPointClass
    });

    // EXIT
    lines.exit().remove();
    areas.exit().remove();
    points.exit().remove();
    // dots.exit().remove();

};

export default d3Chart;
