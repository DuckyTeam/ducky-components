import styles from './drawStartsInText.css';

export default (group, daysToStart, height, width, style) => {
    group.classed(style, true);
    const data = daysToStart !== 0 ? [daysToStart] : [];
    const text = group.selectAll('text').data(data);

    const eneteredText = text.enter().append('text').text(`${daysToStart} dager til start`);

    const mergedText = eneteredText.merge(text);

    mergedText.text(`${daysToStart} dager til start`)
      .attr('x', width/2)
      .attr('y', height/2 + 15);

    text.exit().remove();
}
