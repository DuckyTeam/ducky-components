import styles from './drawCO2AxisLabel.css';

export default (labelGroup) => {
    labelGroup.append('text')
      .text("kg CO e")
      .attr('class', styles.text)
      .attr('x', -38)
      .attr('y', 4);

    labelGroup.append('text')
      .text('2')
      .attr('class', `${styles.text} ${styles.textSub}`)
      .attr('x', -38)
      .attr('y', 4)
      .attr('dy', 4)
      .attr('dx', 35);
}
