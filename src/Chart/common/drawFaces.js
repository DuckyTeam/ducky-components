import styles from './drawFaces.css';
import paths from './../svgpaths';

export default (faceGroup, goals, yourScore, maxScore, yScale, xValue, tranistionSpeed) => {

  const faceValues = goals.map((goal, index) => index > 0 ? goals[index] - (goal - goals[index - 1]) / 2 : goal / 2)
    .slice(0, goals.reduce((acc, goal) => (goal <= maxScore) ? acc + 1 : acc, 0) + 1);

  const numberAcheieved = goals.reduce((acc, goal) => goal <= yourScore ? acc + 1 : acc, 0);

  const faces = faceGroup.selectAll('svg').data(faceValues);

  const enteredFaces = faces.enter();

  enteredFaces.append('svg').attr({
    viewBox: "0 0 768 768",
    x: xValue + 100,
    y: data => yScale(data) - 10,
    width: 20,
    height: 20
  }).append('path').attr({
    d: (data, index) => paths.faces[index]
  });

  faces.exit().transition().duration(tranistionSpeed).attr({
    x: xValue + 100
  }).remove();

  faces.transition().delay(tranistionSpeed).duration(tranistionSpeed).attr({
    x: xValue,
    y: d => yScale(d) - 10,
  });

  faces.select('path').attr({
      class: (data, index) => index < numberAcheieved ? styles[`faceActive${index}`] : styles.faceInactive
    });
}
