import { select, selectAll, event } from 'd3-selection';
import { pack, hierarchy } from 'd3-hierarchy';
import { json } from 'd3-request';
import { geoPath, geoMercator } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import { max, min } from 'd3-array';
import { transition } from 'd3-transition';


import { feature, mesh} from 'topojson';

import styles from './styles.css';

const fylker = require('./../../assets/fylker.topo.json');

const viz = {};

viz.create = (el, props) => {

  const svg = select(el).append("svg")
    .attr("id", `MapNorway${props.id}`)
    .attr("class", styles.svg)
    .attr("height", props.height)
    .attr("width", props.width);

  const tooltip = select(el).append("div")
    .attr("class", styles.tooltip)
    .style("opacity", 0);

  svg.append("g")
    .attr("class", styles.fylker);

  svg.append("g")
    .attr("class", styles.grenser);

  viz.update(el, props);
};

viz.update = (el, props) => {

  props.hoverColor = props.hoverColor || '#607D8B';

  const svg = select(el).select(`#MapNorway${props.id}`);

  const colorScale = scaleLinear()
    .domain([0, max(Object.keys(props.values).map(k => props.values[k]))])
    .range([props.fromColor, props.toColor])

  json(fylker, function(error, map) {
    if (error) throw error;

    const b = map.bbox;

    const projection = geoMercator()
      .scale(min([props.height, props.width])*1.7)
      .center([(b[0]+b[2])/2, (b[1]+b[3])/2])
      .translate([props.width / 2, 15 + props.height / 2]);

    const path = geoPath().projection(projection);

    /*
    Zoom / pan
    https://bl.ocks.org/mbostock/eec4a6cda2f573574a11
    */

    const tooltip = select(el).select(`.${styles.tooltip}`);

    const getFill = d => {
      if (d === 0 || !props.values[d.properties.NAVN]) {
        return props.zeroColor;
      }
      return colorScale(props.values[d.properties.NAVN] || 0);
    };

    const fylker = svg.select(`.${styles.fylker}`)
      .selectAll("path")
      .data(feature(map, map.objects['fylker.geo']).features);

    const enterFylker = fylker.enter()
      .append("path")
        .attr("fill", getFill)
        .attr("class", styles.fylke)
        .attr("d", path)
        .on("mouseover", d => {
          console.log(d);
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`${d.properties.NAVN} <br/> ${props.values[d.properties.NAVN] || 0} ${props.unit}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
            })
        .on("mouseout", d => {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    const merged = enterFylker.merge(fylker);

    merged.transition().duration(1000)
      .attr("fill", getFill)
      .attr("class", styles.fylke)
      .attr("d", path);
    });
};

viz.destroy = (el) => {
  select(el).remove();
};

export default viz;
