import { select, selectAll } from 'd3-selection';
import { pack, hierarchy } from 'd3-hierarchy';

import styles from './styles.css';

const viz = {};

viz.create = (el, props) => {

  select(el).append("svg")
    .attr("id", `ActionBubbles${props.id}`)
    .attr("height", props.height)
    .attr("width", props.width);

  viz.update(el, props);
};

viz.update = (el, props) => {

  const svg = select(el).select(`#ActionBubbles${props.id}`);

  const data = {
    name: "root",
    children: props.data
  };

  const bubble = pack()
    .size([props.width, props.height])
    .padding(1.5);

  const nodes = bubble(hierarchy(data).sum(d => d.size)).leaves();

  const bubbles = svg.selectAll('.circles').data(nodes);

  const enter = bubbles.enter();

  enter.filter(d => d.parent)
    .append('svg:image')
      .attr('class', 'circles')
      .attr('xlink:href', d => d.data.icon)
      .attr('transform', d => `translate(${d.x}, ${d.y})`)
      .attr('height', 0)
      .attr('width', 0);

  bubbles.transition().delay(200).duration(1000)
    .attr('transform', d => `translate(${d.x - d.r}, ${d.y - d.r})`)
    .attr('height', d => d.r*2)
    .attr('width', d => d.r*2);

  const exit = bubbles.exit();

  exit.remove();
};

viz.destroy = (el) => {
  select(el).remove();
};

export default viz;
