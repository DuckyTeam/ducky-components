import styles from './drawCO2AxisLabel.css';

export default (labelGroup) => {
    labelGroup.append('text').text("kg CO e").attr({
      class: styles.text,
      x: -38,
      y: 4
    });
    labelGroup.append('text').text('2').attr({
      class: `${styles.text} ${styles.textSub}`,
      x: -38,
      y: 4,
      dy: 4,
      dx: 35
    });
}
