import { select, selectAll } from 'd3-selection';
import { min } from 'd3-array';
import { transition } from 'd3-transition';

import styles from './drawGoalLabels.css';
import paths from './../svgpaths';

export default (labelGroup, data, yScale, speed, onClick) => {
  const labels = labelGroup.selectAll('g').data(data, g => g.label);

  const eventListenerCO2 = (d, i) => {
    if (d.value <= yourScore || d.value === goal) {
      onClick({co2: d.value});
    }
  }

  //Enter
  const enteredLabels = labels.enter().append('g');

  enteredLabels.append('text')
    .text(data => Number(data.label).toLocaleString())
    .attr('x', -130)
    .attr('y', data => yScale(data.value) - 5)
    .attr('class', data => data.classNameText)
    .attr('font-size', '10px')
    .on('click', eventListenerCO2);

  enteredLabels.append('svg')
    .attr('viewBox', "0 0 768 768")
    .attr('width', 40)
    .attr('height', 16)
    .attr('y', data => yScale(data.value) - 17)
    .attr('x', -90)
    .append('path')
      .attr('d', data => data.path)
      .attr('class', data => data.classNameIcon);

  const mergedSelection = enteredLabels.merge(labels);

  mergedSelection.select('svg').transition().delay(speed).duration(speed)
    .attr('y', data => yScale(data.value) - 17)
    .attr('x', -50);

  mergedSelection.select('svg').select('path')
    .attr('d', data => data.path)
    .attr('class', data => data.classNameIcon);

  mergedSelection.select('text').transition().delay(speed).duration(speed)
    .text((data) => Number(data.label).toLocaleString())
    .attr('y', data => yScale(data.value) - 5)
    .attr('x', -20);

  mergedSelection.select('text')
    .attr('class', data => data.classNameText)
    .on('click', eventListenerCO2);

  //Exit
  const exit = labels.exit();
  exit.select('svg').transition().delay(speed).duration(speed)
    .attr('x', -90);

  exit.select('text').transition().delay(speed).duration(speed)
    .attr('x', -130);

  exit.remove();
};
