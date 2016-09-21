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
    ]
};

d3Chart.create = (el, props, state) => {
    const xAxisOffset = props.height + props.margin.top + 5;
    const svg = d3
        .select(el)
        .append('svg')
        .attr('class', `d3Chart${props.id} ${styles.svg}`)
        .attr('width', props.width)
        .attr('height', props.height);

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

    d3Chart.update(el, state, props);
};

d3Chart.update = (el, state, props) => {
    const height = props.height - props.margin.top - props.margin.bottom;
    const xAxisOffset = height + props.margin.top + 5;
    const speed = 250;
    const textPadding = 6;
    const barTextFontSize = 20;

    const leaderId = state.data.filter((d) => d.value === d3.max(state.data, d => d.value))[0].id;

    const getClasses = d => `${styles.rectangleGroup} ${d.id === state.member ? styles.member : null} ${d.id === leaderId ? styles.leader : null} ${d.id === state.selected ? styles.selected : null}`;

    const faceValues = state.goals.map((goal, index) => {
      return index > 0 ? state.goals[index] - (goal - state.goals[index - 1]) / 2 : goal / 2;
    }).slice(0,4);

    const getPath = d => {
        if (d.id === state.member) {
          return paths.leaf;
        } else if (d.id === leaderId) {
          return paths.crown
        }
        return '';
    };

    const getIconClass = d => {
      if (d.id === leaderId) {
        return `${styles.leaderIcon} ${styles.iconPaths}`;
      } else if (d.id === state.member) {
        return `${styles.memberIcon} ${styles.iconPaths}`;
      }
      return `${styles.backgroundColorIcon} ${styles.iconPaths}`;
    };

    const isSelectedByName = label => {
      let found = false;
      state.data.forEach(dp => {
        if (dp.label === label && dp.id === state.selected) {
          found = true;
        }
      });
      return found;
    }

    const yourScore = state.data.reduce((acc, dp) => {
      return dp.id === state.member ? acc + dp.value : acc;
    }, 0);

    const getBarWidth = d => d3.min([xScale.rangeBand(), 24]);
    const getBarX = d => xScale(d.label) + (xScale.rangeBand() - getBarWidth(d)) / 2;
    const getTextX = d => getBarX(d) + getBarWidth(d) / 2;
    const getFontSize = d => {
      if (d.value < 10000) {
        return '14px';
      } else if (d.value < 1000000) {
        return '12px';
      }
      return '10px';
    };

    // Resize svg-canvas
    var svg = d3.select(`.d3Chart${props.id}`)
        .attr('width', props.width)
        .attr('height', props.height);

    // Move xaxis
    d3.select(`.${styles.xAxis}`)
        .attr("transform", `translate(${props.margin.left}, ${xAxisOffset})`);

    const xScale = d3.scale.ordinal()
      .domain(state.data.map(d => d.label))
      .rangeBands([0, props.width - props.margin.left - props.margin.right], 0.67);

    const highestScore = d3.max(state.data, d => d.value);

    const nextGoal = () => {
      for(let i = 0; i < state.goals.length; i++) {
        if (state.goals[i] > highestScore) {
          return state.goals[i];
        }
      }
      return state.goals[state.goals.length - 1];
    };

    const yScale = d3.scale.linear()
      .domain([0, d3.max([highestScore, nextGoal()])])
      .range([height - 4, 15 + barTextFontSize + textPadding*2]); //Make sure all the stuff on top of graph actually fits inside canvas

    const xAxis = d3
        .svg
        .axis()
        .scale(xScale)
        .orient("bottom");

    const yAxis = d3
        .svg
        .axis()
        .scale(yScale)
        .tickValues(state.goals.slice(0, d3.min([state.goals.indexOf(nextGoal()), state.goals.length]) + 1))
        .tickSize(- (props.width), 0, 0)
        .orient("left");

    const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data, d => d.id).attr({
      class: getClasses
    });
    const faces = svg.select(`.${styles.faceGroup}`).selectAll('svg').data(faceValues);

    //Transition in new axis
    svg.selectAll(`.${styles.yAxis}`).transition().duration(speed).delay(speed).call(yAxis);
    svg.selectAll(`.${styles.xAxis}`).transition().duration(speed).delay(speed).call(xAxis).selectAll('.tick').attr('id', d => isSelectedByName(d) ? styles.selectedXTick : null);

    const enteredFaces = faces.enter();

    enteredFaces.append('svg').attr({
      viewBox: "0 0 768 768",
      x: props.width,
      y: d => yScale(d),
      width: 20,
      height: 20
    }).append('path').attr({
      d: (d, i) => paths.faces[i]
    });

    faces.exit().remove();

    faces.transition().delay(speed).duration(speed).attr({
      x: props.width - 30,
      y: yScale,
    }).select('path').attr({
      class: (d, i) => d <= yourScore ? styles[`faceActive${i}`] : styles.faceInactive
    });

    //Enter new reactangles and set them to height 0
    var entered = rects.enter().append("g")
      .attr({
        class: getClasses
      })
      .on('click', (d, i) => d.onClick(d.id, i));

    entered.append("rect")
      .attr('class', styles.rectangle)
      .attr('rx', 2)
      .attr('x', getBarX)
      .attr('y', height)
      .attr('height', 0)
      .attr('width', getBarWidth);

    entered.append('svg').attr({
        viewBox: "0 0 768 768",
        width: d => xScale.rangeBand(),
        height: d => xScale.rangeBand(),
        x: getBarX,
        y: d => height,
        opacity: 0
      }).append('path').attr({
        class: getIconClass,
        d: getPath
      });

    entered.append('text')
      .attr({
        class: styles.barText,
        text: d => Number(d.value).toLocaleString(),
        x: d => xScale(d.label) + 0.5*xScale.rangeBand(),
        y: d => height,
        width: d => xScale.rangeBand(),
        height: d => xScale.rangeBand(),
        'font-size': getFontSize
      });

    //Remove unnessescary rectangles
    rects.exit().transition().duration(speed)
      .attr('y', d => height)
      .attr('height', 0)
      .remove();

    //Transition the x position after removing rectangles
    var transX = rects.transition().delay(speed).duration(speed);

    transX.select("rect")
      .attr('x', getBarX)
      .attr('width', getBarWidth)
      .attr('fill', d => d.color);

    transX.select("svg")
      .attr({
          x: getBarX
        });

    transX.select("text")
      .text(d => Number(d.value).toLocaleString())
      .attr({
        'font-size': getFontSize,
        x: getTextX
      });

    //Transition the y position after x position
    var transY = rects.transition().delay(speed*2)

    transY.select("rect")
      .attr('y', d => yScale(d.value))
      .attr('height', d => height - yScale(d.value));

    transY.select("svg").attr({
        y: d => yScale(d.value) - getBarWidth(d) - barTextFontSize,
        width: getBarWidth,
        height: getBarWidth,
        opacity: 1
    });

    rects.select('svg').select('path').attr({
      d: getPath,
      class: getIconClass
    });

    transY.select("text")
      .text(d => Number(d.value).toLocaleString())
      .attr({
        'font-size': getFontSize,
        y: d => yScale(d.value) - textPadding
      });

};

export default d3Chart;
