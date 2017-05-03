import paths from './../svgpaths';
import {min, max} from 'd3-array';

const drawBarsMobile = (svg, data, xScale, yScale, height, leaderId, speed, memberOf, selectedId, onClick, styles) => {
  const barWidth = min([xScale.bandwidth(), 20]);
  const getBarX = (data) => xScale(data.id) + (xScale.bandwidth() - barWidth) / 2

  const getClasses = data => `${styles.rectangleGroup} ${data.id === memberOf ? styles.member : null}
                                ${data.id === leaderId ? styles.leader : null} ${data.id === selectedId ? styles.selected : null}`;

  //Actually draw the rectangles
  const rects = svg.select(`.${styles.bars}`).selectAll("g").data(data, data => data.id);

  const entered = rects.enter().append("g")
    .attr('class', getClasses)
    .on('click', (data, index) => {
      if (onClick) {
        onClick(data.id)}
      }
    );
    console.log(data);
  entered.append("rect")
    .attr('class', styles.rectangle)
    .attr('rx', 2)
    .attr('x', getBarX)
    .attr('y', height)
    .attr('height', 0)
    .attr('width', barWidth);

  // Remove unnessescary rectangles
  rects.exit().transition().duration(speed)
    .attr('y', height)
    .attr('height', 0)
    .remove();


  const mergedSelection = entered.merge(rects);

  // Transition the x position after removing rectangles

  mergedSelection.attr('class', getClasses);

  const transX = mergedSelection.transition().delay(speed).duration(speed);

  transX.select("rect")
    .attr('x', getBarX)
    .attr('width', barWidth)
    .attr('fill', data => data.color);

  // Transition the y position after x position
  const transY = mergedSelection.transition().delay(speed * 2).duration(speed)

  transY.select("rect")
    .attr('rx', data => data.value === 0 ? 0 : 2)
    .attr('y', (data) => height - yScale(data.value) + 3)
    .attr('height', (data) => data.value === null ? 0 : yScale(data.value) - 3);
}

module.exports = drawBarsMobile;
