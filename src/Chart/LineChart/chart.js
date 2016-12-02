import { min, max } from 'd3-array';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { select, selectAll } from 'd3-selection';
import { line, area } from 'd3-shape';
import { timeFormat } from 'd3-time-format';
import { transition } from 'd3-transition';

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
    const maxValue = max(state.data.map(d => max(d.data.map(d => d.value))));
    state.lowestScore = min(state.data.map(d => {
      if (d.data && d.data.length === 0) {
        return 0;
      } else if (d.data) {
        return d.data[d.data.length - 1].value;
      }
      return 0;
    }));
    let leaderId;
    let leaderName;

    if (!state.noLeader) {
      state.leaderId = leaderId;
      [leaderId, leaderName] = state.data.reduce((acc, d) => {
        return d.data[d.data.length - 1].value === maxValue ? [d.id, d.label] : acc;
      }, [-1, '']);
    }

    //Make sure that memberOf is on top
    state.data = state.data.sort((a, b) => {
      if (a.id === state.memberOf) {
        return 1;
      } else if (b.id === state.memberOf) {
        return -1;
      }
      return b.id - a.id;
    });

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
      let newData = [line.data[0], line.data[max([line.data.length - 1, 0])]];
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

    const xScale = scaleTime()
        .range([40, props.width - props.margin.left - props.margin.right - 40])
        .domain([moment(state.startDate), moment(state.endDate)]);

    const highestYValue = max([maxValue, nextGoal(), state.goals[1]]);

    const yScale = scaleLinear()
      .domain([0, highestYValue])
      .range([state.height - 4, 15 + props.margin.top]);

    state.yAxisTickValues = calculateYAxisTicks(state.goals, state.nextGoal, state.lowestScore, false, yScale);

    const lineDrawer = line()
        .x(d => xScale(moment(d.date)))
        .y(d => yScale(d.value));

    const lineDrawerZero = line()
        .x(d => xScale(moment(d.date)))
        .y(state.height);

    const areaDrawer = area()
        .x(d => xScale(moment(d.date)))
        .y0(state.height)
        .y1(d => yScale(d.value));

    const areaDrawerZero = area()
        .x(d => xScale(moment(d.date)))
        .y0(state.height)
        .y1(state.height);

    const yAxis = axisLeft(yScale)
        .tickValues(state.yAxisTickValues)
        .tickSize(-props.width, 0, 0);

    const xAxis = axisBottom(xScale)
        .tickFormat(timeFormat("%d. %b"))
        .tickValues(xAxisTicks);

     const yAxisLeader = axisLeft(yScale)
        .tickValues([maxValue - 30])
        .tickSize(-props.width, 0, 0);

    // Move axes
    utils.selectXAxisGroup(svg).attr("transform", `translate(${props.margin.left}, ${state.xAxisOffset})`);
    utils.selectYAxisGroup(svg).transition().duration(speed).delay(dontAnimateIn ? 0 : speed).call(yAxis);
    utils.selectXAxisGroup(svg).transition().duration(speed).delay(speed).call(xAxis);
    utils.selectXAxisGroup(svg).selectAll('.tick')
        .classed(styles.startEndDates, (data, index) => {
            return index === 0 || index === (utils.selectXAxisGroup(svg).selectAll('.tick')._groups[0].length - 1);
        }).on('click', (data) => state.onClick(getIdbyName(data)));;

    //Draw labels
    const labelGroup = utils.getChartGroup(svg, styles.labels);

    drawLabels(labelGroup, state.yAxisTickValues, false, highestYValue, yourScore, yScale, dontAnimateIn ? 0 : speed, state.onClickCO2);

    //Draw faces
    /*const xValue = props.width - props.margin.left - props.margin.right * 2;
    const chartGroup = utils.getChartGroup(svg, styles.faceGroup);

    drawFaces(chartGroup, goals, yourScore, maxValue, yScale, xValue, dontAnimateIn ? 0 : speed);
    */

    if (!state.noLeader) {
      // Draw leader line
      const leaderLine = svg.select(`.${styles.leaderLine}`).selectAll('line').data([maxValue]);

      leaderLine.enter().append('line')
        .attr('class', styles.leaderLine)
        .attr('x1', -50)
        .attr('x2', props.width)
        .attr('y1', yScale)
        .attr('y2', yScale)
        .attr('opacity', 0)
        .merge(leaderLine)
          .transition().delay(speed).duration(speed)
          .attr('y1', yScale)
          .attr('y2', yScale)
          .attr('x1', -50)
          .attr('x2', props.width)
          .attr('opacity', 1)
          .select('line')
            .attr('class', styles.leaderLine);

      leaderLine.exit().remove();

      // Leader name and value
      const leaderLabel = svg.select(`.${styles.leaderGroup}`).selectAll('svg').data([maxValue]);
      const leaderText = svg.select(`.${styles.leaderGroup}`).selectAll('text').data([maxValue]);

      leaderLabel.enter().append('svg')
        .attr('viewBox', "0 0 768 768")
        .attr('x', 40)
        .attr('y', state.height)
        .attr('width', 40)
        .attr('height', 12)
        .attr('opacity', 0)
        .append('path')
          .attr('d', paths.crown)
          .attr('class', styles.leaderLabel)
          .merge(leaderLabel)
            .transition().delay(speed).duration(speed)
            .attr('x', 40)
            .attr('y', d => yScale(d) - 16)
            .attr('opacity', 1)
            .select('path')
              .attr('d', paths.crown)
              .attr('class', styles.leaderLabel);

        leaderLabel.exit().remove();

        const yourTeam = leaderId === state.memberOf ? " - Ditt lag" : "";

        leaderText.enter().append('text')
          .text((data) => `${Number(maxValue).toLocaleString()} (${leaderName})`)
          .attr('x', 72)
          .attr('y', state.height + 6)
          .attr('opacity', 0)
          .attr('class', styles.leaderText)
          .attr('font-size', '12px')
          .merge(leaderText)
            .transition().delay(speed).duration(speed)
            .text((data) => `${Number(maxValue).toLocaleString()} (${leaderName}${yourTeam})`)
            .attr('class', styles.leaderText)
            .attr('font-size', '12px')
            .attr('y', data => yScale(data) - 5.5)
            .attr('x', 72)
            .attr('opacity', 1);

      leaderText.exit().remove();
    }

    const lines = svg.select(`.${styles.lines}`).selectAll('g').data(state.data, d => d.id);
    const areas = svg.select(`.${styles.areas}`).selectAll('g').data(state.data, d => d.id);

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
    const enteredLines = lines.enter().append('g');
    const enteredAreas = areas.enter().append('g');

    enteredLines.append('path')
      .attr('class', styles.line)
      .attr('d', d => lineDrawerZero(d.data));

    enteredAreas.append('path')
      .attr('class', styles.area)
      .attr('d', d => areaDrawerZero(d.data));

    // ENTER & UPDATE

    lines.exit().remove();
    areas.exit().remove();

    const mergedLines = enteredLines.merge(lines);
    const mergedAreas = enteredAreas.merge(areas);

    mergedLines.select('path')
      .attr('class', getStrokeClass)
      .on('click', data => state.onClick(data.id));

    mergedLines.select('path').transition().delay(speed).duration(speed)
      .attr('d', d => lineDrawer(d.data));

    mergedAreas.select('path').transition().delay(speed).duration(speed)
      .attr('d', d => areaDrawer(d.data));

    mergedAreas.select('path')
      .attr('display', d => state.memberOf === d.id ? true : "none");

    //Draw points
    const points = svg.select(`.${styles.pointSeries}`).selectAll('g').data(dotData, d => `${d.id}${d.date}`);
    const enteredPoints = points.enter().append('g');

    enteredPoints.append("circle")
      .attr('class', styles.pointSeries)
      .attr('r', 4)
      .attr('cx', d => xScale(moment(d.date)))
      .attr('cy', state.height)
      .attr('class', getPointClass);

    points.exit().remove();

    const mergedPoints = enteredPoints.merge(points);

    mergedPoints.select('circle').transition().delay(speed).duration(speed)
      .attr('r', 4)
      .attr('cx', d => xScale(moment(d.date)))
      .attr('cy', d => yScale(d.value));

    mergedPoints.select('circle')
      .attr('class', getPointClass)
      .on('click', data => state.onClick && state.onClick(data.id));


};

d3Chart.destroy = (id) => {
  utils.selectSVG(id).remove();
};

export default d3Chart;
