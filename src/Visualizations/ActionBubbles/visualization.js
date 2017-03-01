import { select, selectAll, event } from 'd3-selection';
import { pack, hierarchy } from 'd3-hierarchy';

import styles from './styles.css';

const viz = {};

viz.create = (el, props) => {

  select(el).append("svg")
    .attr("id", `ActionBubbles${props.id}`)
    .attr("height", props.height)
    .attr("width", props.width);

  select(el).append("div")
    .attr("class", styles.tooltip)
    .style("opacity", 0);

  viz.update(el, props);
};

viz.update = (el, props) => {

  const svg = select(el).select(`#ActionBubbles${props.id}`);

  const data = {
    name: "root",
    children: props.data
  };

  const tooltip = select(el).select(`.${styles.tooltip}`);

  const bubble = pack()
    .size([props.width, props.height])
    .padding(1.5);

  const nodes = bubble(hierarchy(data).sum(d => d.size)).leaves();

  const bubbles = svg.selectAll(`.${styles.circle}`).data(nodes);

  const entered = bubbles.enter()
    .filter(d => d.parent)
    .append('svg:image')
      .attr('class', `${styles.circle}`)
      .attr('xlink:href', d => d.data.icon)
      .attr('transform', d => `translate(${d.x}, ${d.y})`)
      .attr('height', 0)
      .attr('width', 0)
      .on("mouseover", d => {
          tooltip.transition()
              .duration(200)
              .style("opacity", .9);
          tooltip.html(`${d.data.text} <br/> ${d.data.size} ${props.unit}`)
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
          })
      .on("mouseout", d => {
          tooltip.transition()
              .duration(500)
              .style("opacity", 0);
      })
      .transition().delay(200).duration(1000)
        .attr('transform', d => `translate(${d.x - d.r}, ${d.y - d.r})`)
        .attr('height', d => d.r*2)
        .attr('width', d => d.r*2);

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
