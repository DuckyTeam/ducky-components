import d3 from 'd3';
import moment from 'moment';
import utils from './../utils';
import styles from './styles.css';
import paths from './../svgpaths';
import drawFaces from './../common/drawFaces';
import drawLabels from './../common/drawGoalLabels';
import drawCO2AxisLabel from './../common/drawCO2AxisLabel';
import calculateYAxisTicks from './../common/calculateYAxisTicks';

const d3Chart = {};

d3Chart.create = (el, props, state, formatting) => {
  props.xAxisOffset = props.height + props.margin.top + 5;
  const svg = utils.drawSVG(el, props);

  utils.drawXAxisGroup(svg, props);
  utils.drawYAxisGroup(svg, props);
  utils.drawChartGroup(svg, props, styles.areas);
  utils.drawChartGroup(svg, props, styles.lines);
  utils.drawChartGroup(svg, props, styles.pointSeries);
  utils.drawChartGroup(svg, props, styles.labels);
  utils.drawChartGroup(svg, props, styles.faceGroup);
  utils.drawChartGroup(svg, props, styles.leaderLine);
  utils.drawChartGroup(svg, props, styles.leaderGroup);

  drawCO2AxisLabel(utils.drawChartGroup(svg, props, styles.co2AxisLabel));

  d3Chart.update(el, state, props, formatting, true);
};

d3Chart.update = (el, state, props, formatting, dontAnimateIn) => {
    state.height = props.height - props.margin.top - props.margin.bottom;
    state.xAxisOffset = state.height + props.margin.top + 5;
    const speed = 300;
    const maxValue = d3.max(state.data.map(d => d3.max(d.data.map(d => d.value))));
    state.lowestScore = d3.min(state.data.map(d => {
      if (d.data && d.data.length === 0) {
        return 0;
      } else if (d.data) {
        return d.data[d.data.length - 1].value;
      }
      return 0;
    }));
    let leaderId;
    let leaderName;
    state.leaderId = leaderId;
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

    const getIdbyName = name => {
      let id = -1;
      state.data.forEach((d) => {
        if (d.label === name) {
          id = d.id;
        }
      });
      return id;
    }


    const xAxisTicks = utils.getDateTicks(state.startDate, state.endDate, 6);
    const dotData = state.data.reduce((acc, line) => {
      let newData = [line.data[0], line.data[d3.max([line.data.length - 1, 0])]];
      newData[0].id = line.id;
      newData[1].id = line.id;
      return acc.concat(newData);
    }, []);

    const yourScore = state.data.reduce((acc, dp) => {
      return dp.id === state.memberOf ? acc + dp.data[dp.data.length - 1].value : acc;
    }, 0);

    const getPointClass = d => {
      let classes = styles.pointSeries;
      if (d.id === leaderId) {
        classes = `${classes} ${styles.leaderPoints}`; }
      if (d.id === state.memberOf) {
        classes = `${classes} ${styles.yourPoints}`; }
      if (d.id === state.selectedId) {
        classes = `${classes} ${styles.selectedPoints}`; }
      return classes;
    }

    const svg = utils.selectSVG(props.id)
          .attr('width', props.width)
          .attr('height', props.height);

    const xScale = d3.time.scale()
        .range([40, props.width - props.margin.left - props.margin.right - 40])
        .domain([moment(state.startDate), moment(state.endDate)]);

    const yScale = d3.scale.linear()
      .domain([0, d3.max([maxValue, nextGoal(), state.goals[1]])])
      .range([state.height - 4, 15 + props.margin.top]);

    state.yAxisTickValues = calculateYAxisTicks(state.goals, state.nextGoal, state.lowestScore, yScale);

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
        .tickValues(state.yAxisTickValues)
        .tickSize(-props.width, 0, 0)
        .orient("left");

    const xAxis = d3.svg.axis()
     .scale(xScale)
     .tickFormat(d3.time.format("%d. %b"))
     .tickValues(xAxisTicks)
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
    utils.selectYAxisGroup(svg).transition().duration(speed).delay(dontAnimateIn ? 0 : speed).call(yAxis);
    utils.selectXAxisGroup(svg).transition().duration(speed).delay(speed).call(xAxis);
    utils.selectXAxisGroup(svg).selectAll('.tick')
        .classed(styles.startEndDates, (data, index) => {
            return index === 0 || index === (utils.selectXAxisGroup(svg).selectAll('.tick')[0].length - 1);
      }).on('click', (data) => state.onClick(getIdbyName(data)));;

    //Draw labels
    const labelGroup = utils.getChartGroup(svg, styles.labels);

    drawLabels(labelGroup, state.yAxisTickValues, yourScore, yScale, dontAnimateIn ? 0 : speed);

    //Draw faces
    /*const xValue = props.width - props.margin.left - props.margin.right * 2;
    const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

    drawFaces(chartGroup, goals, yourScore, maxValue, yScale, xValue, dontAnimateIn ? 0 : speed);
    */

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
    const leaderLabel = svg.select(`.${styles.leaderGroup}`).selectAll('svg').data([maxValue]);
    const leaderText = svg.select(`.${styles.leaderGroup}`).selectAll('text').data([maxValue]);

    const enteredLeaderLabel = leaderLabel.enter();
      enteredLeaderLabel.append('svg').attr({
        viewBox: "0 0 768 768",
        x: 40,
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
        x: 40,
        y: d => yScale(d) - 16,
        opacity: 1
      }).select('path')
        .attr({
          d: paths.crown,
          class: styles.leaderLabel
        });

        const enteredLeaderText = leaderText.enter();
        enteredLeaderText.append('text')
          .text((data) => `${Number(maxValue).toLocaleString()} (${leaderName})`)
          .attr({
            x: 72,
            y: state.height + 6,
            opacity: 0,
            class: styles.leaderText,
            'font-size': '12px'
          });
        leaderText.exit().remove();

        const yourTeam = leaderId === state.memberOf ? " - Ditt lag" : "";

        leaderText.transition().delay(speed).duration(speed)
        .text((data) => `${Number(maxValue).toLocaleString()} (${leaderName}${yourTeam})`)
        .attr({
          class: styles.leaderText,
          'font-size': '12px',
          y: data => yScale(data) - 5.5,
          x: 72,
          opacity: 1
        });

    const lines = svg.select(`.${styles.lines}`).selectAll('path').data(state.data);
    const areas = svg.select(`.${styles.areas}`).selectAll('path').data(state.data);
    //const dots = svg.select(`.${styles.dotSeries}`).data(state.data);
    const getStrokeClass = (data) => {
      let classes = `${styles.progressLine}`;
      if (data.id === state.memberOf) {
        classes = `${classes} ${styles.memberStroke}`;
      }
      if (data.id === leaderId) {
        classes = `${classes} ${styles.leaderStroke}`;
      }
      if (data.id === state.selectedId) {
        classes = `${classes} ${styles.selectedStroke}`;
      }
      return classes;
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
      class: (d) => getStrokeClass(d)
    })
    .on('click', (data) => state.onClick && state.onClick(data.id));

   areas.transition().delay(speed).duration(speed).attr({
      d: d => areaDrawer(d.data)
    });

    areas.attr({
       display: d => state.memberOf === d.id ? true : "none"
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
    })
    .on('click', (data) => state.onClick && state.onClick(data.id));

    // EXIT
    lines.exit().remove();
    areas.exit().remove();
    points.exit().remove();
    // dots.exit().remove();

};

export default d3Chart;
