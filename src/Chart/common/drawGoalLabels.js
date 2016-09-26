import styles from './drawGoalLabels.css';
import paths from './../svgpaths';

export default (labelGroup, goals, yourScore, yScale, speed) => {

  const labels = labelGroup.selectAll('g').data(goals);

  //Enter
  const enteredLabels = labels.enter().append('g');

  enteredLabels.append('text')
    .text((data) => Number(data).toLocaleString())
    .attr({
      x: -120,
      y: data => yScale(data),
      class: (data) => (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText,
      'font-size': '10px'
    });

  enteredLabels.append('svg').attr({
    viewBox: "0 0 768 768",
    width: 40,
    height: 12,
    y: data => yScale(data) - 15,
    x: -80
  }).append('path').attr({
    d: (data) => (data <= yourScore) ? paths.check : paths.leaf,
    class: (data) => (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf
  });

  //Update
  labels.select('svg').transition().delay(speed).duration(speed).attr({
    y: data => yScale(data) -15,
    x: 0
  })
  labels.select('svg').select('path').attr({
    d: (data) => (data <= yourScore) ? paths.check : paths.leaf,
    class: (data) => (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf
  });
  labels.select('text').transition().delay(speed).duration(speed)
    .text((data) => Number(data).toLocaleString())
    .attr({
      y: data => yScale(data),
      x: 0
    });
  labels.select('text').attr({
    class: (data) => (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText
  });

  //Exit
  const exit = labels.exit();
  exit.select('svg').transition().delay(speed).duration(speed).attr({
    x: -80
  });
  exit.select('text').transition().delay(speed).duration(speed).attr({
    x: -120
  });
}
