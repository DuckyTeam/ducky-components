import paths from './../svgpaths';

const drawBars = (svg, state, props, xScale, yScale, styles) => {

  //Bunch of messy helper functions and variables
  const leaderId = state.leaderId;
  const getBarX = (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth) / 2
  const getIconClass = (data) => {
    if (data.id === leaderId) {
      return `${styles.leaderIcon} ${styles.iconPaths}`;
    } else if (data.id === state.memberOf) {
      return `${styles.memberIcon} ${styles.iconPaths}`;
    }
    return `${styles.backgroundColorIcon} ${styles.iconPaths}`;
  };
  const getPath = (data) => {
    if (data.id === state.memberOf && data.id !== leaderId) {
      return (state.isMobile || state.yourScore === 0) ? paths.check : paths.leaf;
    } else if (data.id === leaderId) {
      return paths.crown;
    }
    return '';
  };
  const getClasses = data => `${state.isMobile ? styles.rectangleGroupMobile : styles.rectangleGroup} ${data.id === state.memberOf ? styles.member : null}
                                ${data.id === state.leaderId ? styles.leader : null} ${data.id === state.selectedId ? styles.selected : null}`;

  const getFontSize = data => {
    if (data.value < 10000) {
      return '14px';
    } else if (data.value < 1000000) {
      return '12px';
    }
    return '10px';
  };

  const getTextClass = d => {
    if (d.value === 0) {
      return styles.barTextHidden;
    }
    if (state.isMobile) {
      return styles.barTextHidden;
    } else if (d.id === leaderId || d.id === state.memberOf) {
      return styles.barText;
    }
    return styles.barTextHidden;
  }

  const getTextX = (data) => getBarX(data) + state.barWidth / 2;

  //Actually draw the rectangles
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data, (data) => data.id).attr({class: getClasses});
  const entered = rects.enter().append("g")
    .attr({class: getClasses})
    .on('click', (data, index) => {
      if (state.onClick) {
        state.onClick(data.id)}
      }
    );

  entered.append("rect")
    .attr('class', styles.rectangle)
    .attr('rx', 2)
    .attr('x', (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth / 2))
    .attr('y', state.height)
    .attr('height', 0)
    .attr('width', state.barWidth);

  entered.append('svg').attr({
    viewBox: "0 0 768 768",
    width: xScale.rangeBand(),
    height: xScale.rangeBand(),
    x: (data) => xScale(data.label) + (xScale.rangeBand() - state.barWidth / 2),
    y: state.height,
    opacity: 0
  }).append('path').attr({
    class: getIconClass,
    d: getPath
  });

  entered.append('text')
    .attr({
      class: getTextClass,
      text: (data) => Number(data.value).toLocaleString(),
      x: (data) => xScale(data.label) + 0.5*xScale.rangeBand(),
      y: state.height,
      width: xScale.rangeBand(),
      height: xScale.rangeBand(),
      'font-size': getFontSize
    });

  // Remove unnessescary rectangles
  rects.exit().transition().duration(state.speed)
    .attr('y', state.height)
    .attr('height', 0)
    .remove();

  // Transition the x position after removing rectangles
  const transX = rects.transition().delay(state.speed).duration(state.speed);

  transX.select("rect")
    .attr('x', getBarX)
    .attr('width', state.barWidth)
    .attr('fill', (data) => data.color);

  transX.select("svg")
    .attr('x', getBarX);

  transX.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr({
      'font-size': getFontSize,
      x: getTextX
    });

  // Transition the y position after x position
  const transY = rects.transition().delay(state.speed * 2)

  transY.select("rect")
    .attr('y', (data) => yScale(data.value))
    .attr('height', (data) => state.height - yScale(data.value));

  transY.select("svg").attr({
    y: (data) => data.value === 0 || state.isMobile ? yScale(data.value) - state.barWidth - 8 : yScale(data.value) - state.barWidth - state.barTextFontSize,
    width: () => d3.min([xScale.rangeBand(), 24]),
    height: () => d3.min([xScale.rangeBand(), 24]),
    opacity: 1
  });

  rects.select('svg').select('path').attr({
    d: getPath,
    class: getIconClass
  });

  rects.select('text').attr({
    class: getTextClass
  });

  transY.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr({
      'font-size': getFontSize,
      y: (data) => yScale(data.value) - state.textPadding
    });
}

module.exports = drawBars;
