import d3 from "d3";

export function scale(el, domain) {
    if (!domain) {
        return null;
    }

    return {
        xScale: d3.scale.linear()
            .range([0, el.offsetWidth])
            .domain(domain.x),
        yScale: d3.scale.linear()
            .range([el.offsetHeight, 0])
            .domain(domain.y)
    };
}

export function draw(el, scales, props) {
    d3.select(el).append("text").text(props);
}
