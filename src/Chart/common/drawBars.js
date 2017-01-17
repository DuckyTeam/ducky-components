import paths from './../svgpaths';
import {min, max} from 'd3-array';

const drawBars = (svg, data, xScale, yScale, height, maxWidthBar, leaderId, yourScore, speed, isMobile, grID, memberOf, selectedId, onClick, styles) => {

  //Bunch of messy helper functions and variables
  const barTextFontSize = 20;
  const textPadding = 6;
  const barWidth = min([xScale.bandwidth(), maxWidthBar]);
  const getBarX = (data) => xScale(data.label) + (xScale.bandwidth() - barWidth) / 2
  const getIconClass = (data) => {
    if (data.id === leaderId) {
      return `${styles.leaderIcon} ${styles.iconPaths}`;
    } else if (data.id === memberOf) {
      return `${styles.memberIcon} ${styles.iconPaths}`;
    }
    return `${styles.backgroundColorIcon} ${styles.iconPaths}`;
  };
  const getPath = (data) => {
    if (data.id === memberOf && data.id !== leaderId) {
      return (isMobile || yourScore === 0) ? paths.check : [(grID === 111) ? paths.gnome : paths.leaf];
    } else if (data.id === leaderId) {
      return paths.crown;
    }
    return '';
  };
  const getClasses = data => `${styles.rectangleGroup} ${data.id === memberOf ? styles.member : null}
                                ${data.id === leaderId ? styles.leader : null} ${data.id === selectedId ? styles.selected : null}`;

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
    if (isMobile) {
      return styles.barTextHidden;
    } else if (d.id === leaderId || d.id === memberOf) {
      return styles.barText;
    }
    return styles.barTextHidden;
  }

  const getTextX = (data) => getBarX(data) + barWidth / 2;

  //Actually draw the rectangles
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(data, data => data.id);

  const entered = rects.enter().append("g")
    .attr('class', getClasses)
    .on('click', (data, index) => {
      if (onClick) {
        onClick(data.id)}
      }
    );

  entered.append("rect")
    .attr('class', styles.rectangle)
    .attr('rx', 2)
    .attr('x', (data) => xScale(data.label) + (xScale.bandwidth() - barWidth / 2))
    .attr('y', height + 4)
    .attr('height', 0)
    .attr('width', barWidth);

  entered.append('svg')
    .attr('viewBox', "0 0 768 768")
    .attr('width', 24)
    .attr('height', 24)
    .attr('x', data => xScale(data.label) + (xScale.bandwidth() - barWidth / 2))
    .attr('y', height)
    .attr('opacity', 0)
    .append('path')
      .attr('class', getIconClass)
      .attr('d', getPath);

  entered.append('text')
    .text(data => Number(data.value).toLocaleString())
    .attr('class', getTextClass)
    .attr('x', data => xScale(data.label) + 0.5 * xScale.bandwidth())
    .attr('y', height)
    .attr('width', xScale.bandwidth())
    .attr('height', xScale.bandwidth())
    .attr('font-size', getFontSize)
    .attr('opacity', 0);

  // Remove unnessescary rectangles
  rects.exit().transition().duration(speed)
    .attr('y', height)
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

  const transX = mergedSelection.transition().delay(speed).duration(speed);

  transX.select("rect")
    .attr('x', getBarX)
    .attr('width', barWidth)
    .attr('fill', data => data.color);

  transX.select("svg")
    .attr('x', (data) => xScale(data.label) + (xScale.bandwidth() - barWidth) / 2 + (barWidth - 24)/2);

  transX.select("text")
    .text((data) => Number(data.value).toLocaleString())
    .attr('font-size', getFontSize)
    .attr('x', getTextX);

  // Transition the y position after x position
  const transY = mergedSelection.transition().delay(speed * 2).duration(speed)

  transY.select("rect")
    .attr('y', (data) => yScale(data.value))
    .attr('height', (data) => height + 4 - yScale(data.value));

  transY.select("svg")
    .attr('y', (data) => data.value === 0 || isMobile ? yScale(data.value) - 24 - 8 : yScale(data.value) - 24 - barTextFontSize)
    .attr('width', 24)
    .attr('height', 24)
    .attr('opacity', 1);

  transY.select("text")
    .text(data => Number(data.value).toLocaleString())
    .attr('font-size', getFontSize)
    .attr('y', data => yScale(data.value) - textPadding)
    .attr('opacity', 1);
}

module.exports = drawBars;
