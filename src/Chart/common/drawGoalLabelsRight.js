import { select, selectAll } from 'd3-selection';
import { min } from 'd3-array';
import { transition } from 'd3-transition';

import styles from './drawGoalLabels.css';
import paths from './../svgpaths';

export default (labelGroup, data, yScale, width, speed, onClick) => {
  const labels = labelGroup.selectAll('g').data(data, g => g.label);

  const labelOffset = 81;
  const textOffset = 33;

  const eventListenerCO2 = (d, i) => {
    onClick({co2: d.value});
  }

  //Enter
  const enteredLabels = labels.enter().append('g');

  enteredLabels.append('text')
    .text(data => Number(data.label).toLocaleString())
    .attr('x', width - labelOffset + textOffset)
    .attr('y', data => yScale(data.value) - 5)
    .attr('class', data => data.classNameText)
    .attr('font-size', '10px')
    .on('click', eventListenerCO2);

  enteredLabels.append('svg')
    .attr('viewBox', "0 0 768 768")
    .attr('width', 40)
    .attr('height', 12)
    .attr('y', data => yScale(data.value) - 15)
    .attr('x', width - labelOffset)
    .append('path')
      .attr('d', data => data.path)
      .attr('class', data => data.classNameIcon);

  const mergedSelection = enteredLabels.merge(labels);

  mergedSelection.select('svg').transition().delay(speed).duration(speed)
    .attr('y', data => yScale(data.value) - 15)
    .attr('x', width - labelOffset);

  mergedSelection.select('svg').select('path')
    .attr('d', data => data.path)
    .attr('class', data => data.classNameIcon);

  mergedSelection.select('text').transition().delay(speed).duration(speed)
    .text((data) => Number(data.label).toLocaleString())
    .attr('y', data => yScale(data.value) - 5)
    .attr('x', width - labelOffset + textOffset);

  mergedSelection.select('text')
    .attr('class', data => data.classNameText)
    .on('click', eventListenerCO2);

  //Exit
  const exit = labels.exit();
  exit.select('svg').transition().delay(speed).duration(speed)
    .attr('x', width - 90);

  exit.select('text').transition().delay(speed).duration(speed)
    .attr('x', width - 130);

  exit.remove();
};
