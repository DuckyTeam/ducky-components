import styles from './drawStartsInText.css';
import moment from 'moment';

export default (group, startDate, daysToStart, height, width, style) => {
  group.classed(style, true);

  const start = moment(startDate);
  const now = moment();

  const data = daysToStart !== 0 ? [daysToStart] : [];
  const text = group.selectAll('text').data(data);

  const eneteredText = text.enter().append('text').text(`${daysToStart}`);
  const mergedText = eneteredText.merge(text);

  if (start.isAfter(now)) {
    if (now.isSame(start, 'day')) {
      mergedText.text(`${start.fromNow(true)} til start`)
      .attr('x', width / 2)
      .attr('y', height / 2 + 15);
    } else {
      mergedText.text(`${daysToStart} dager til start`)
      .attr('x', width / 2)
      .attr('y', height / 2 + 15);
    }
  }

  text.exit().remove();
};
