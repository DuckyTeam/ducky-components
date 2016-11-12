import paths from './../svgpaths';
import { min, max } from 'd3-array';

const drawBars = (svg, state, props, xScale, yScale, styles) => {

  //Bunch of messy helper functions and variables
  const leaderId = state.leaderId;
  const barWidth = min([xScale.bandwidth(), 24]);
  const getBarX = (data) => xScale(data.label) + (xScale.bandwidth() - state.barWidth) / 2
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
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(state.data, data => data.id);

  const entered = rects.enter().append("g")
    .attr('class', getClasses)
    .on('click', (data, index) => {
      if (state.onClick) {
        state.onClick(data.id)}
      }
    );

  entered.append("rect")
    .attr('class', styles.rectangle)
    .attr('rx', 2)
    .attr('x', (data) => xScale(data.label) + (xScale.bandwidth() - state.barWidth / 2))
    .attr('y', state.height)
    .attr('height', 0)
    .attr('width', state.barWidth);

  entered.append('svg')
    .attr('viewBox', "0 0 768 768")
    .attr('width', barWidth)
    .attr('height', barWidth)
    .attr('x', data => xScale(data.label) + (xScale.bandwidth() - state.barWidth / 2))
    .attr('y', state.height)
    .attr('opacity', 0)
    .append('path')
      .attr('class', getIconClass)
      .attr('d', getPath);

  entered.append('text')
    .text(data => Number(data.value).toLocaleString())
    .attr('class', getTextClass)
    .attr('x', data => xScale(data.label) + 0.5 * xScale.bandwidth())
    .attr('y', state.height)
    .attr('width', xScale.bandwidth())
    .attr('height', xScale.bandwidth())
    .attr('font-size', getFontSize)
    .attr('opacity', 0);

  // Remove unnessescary rectangles
  rects.exit().transition().duration(state.speed)
    .attr('y', state.height)
    .attr('height', 0)
    .remove();


  const mergedSelection = entered.merge(rects);

  // Transition the x position after removing rectangles

  mergedSelection.attr('class', getClasses);

  mergedSelection.select('svg').select('path')
    .attr('d', getPath)
    .attr('class', getIconClass);

  mergedSelection.select('text')
    .attr('class', getTextClass);

  const transX = mergedSelection.transition().delay(state.speed).duration(state.speed);

  transX.select("rect")
    .attr('x', getBarX)
    .attr('width', state.barWidth)
    .attr('fill', data => data.color);

  transX.select("svg")
    .attr('x', getBarX);

  transX.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr('font-size', getFontSize)
    .attr('x', getTextX);

  // Transition the y position after x position
  const transY = mergedSelection.transition().delay(state.speed * 2).duration(state.speed)

  transY.select("rect")
    .attr('y', (data) => yScale(data.value))
    .attr('height', (data) => state.height - yScale(data.value));

  transY.select("svg")
    .attr('y', (data) => data.value === 0 || state.isMobile ? yScale(data.value) - state.barWidth - 8 : yScale(data.value) - state.barWidth - state.barTextFontSize)
    .attr('width', barWidth)
    .attr('height', barWidth)
    .attr('opacity', 1);

  transY.select("text")
    .text(data => Number(data.value).toLocaleString())
    .attr('font-size', getFontSize)
    .attr('y', data => yScale(data.value) - state.textPadding)
    .attr('opacity', 1);
}

module.exports = drawBars;
