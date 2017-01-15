import styles from './drawCO2AxisLabel.css';

export default (labelGroup, xPos, hasStarted) => {
    labelGroup.append('text')
      .text("kg CO e")
      .attr('class', `${styles.text} ${hasStarted ? '' : styles.inactive}`)
      .attr('x', xPos)
      .attr('y', 4);

    labelGroup.append('text')
      .text('2')
      .attr('class', `${styles.text} ${styles.textSub} ${hasStarted ? '' : styles.inactive}`)
      .attr('x', xPos)
      .attr('y', 4)
      .attr('dy', 4)
      .attr('dx', 35);
}
