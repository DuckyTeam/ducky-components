import { min, max } from 'd3-array';

import paths from './../svgpaths';
import styles from './drawGoalLabels.css';

export default (goals, nextGoal, yourScore, highestYValue, goal, hasStarted, yScale) => {
  const visibleGoals = goals.slice(0, max([min([nextGoal ? goals.indexOf(nextGoal) : goals.length, goals.length]) + 1, 2]))
  visibleGoals.reverse();
  const indexOfNextGoal = visibleGoals.indexOf(visibleGoals.reduce((current, goal) => (goal > yourScore) ? goal : current, 0));
  const withoutAchieved = visibleGoals.slice(0, min([indexOfNextGoal + 2, visibleGoals.length]));
  let prevoiusYValue;
  const lowestScoreY = yScale(withoutAchieved[withoutAchieved.length - 1]);

  if (goal) {
    const nonClustered = withoutAchieved.filter((el, index) => {
      if (yScale(el) + 30 > yScale(goal) && yScale(el) - 30 < yScale(goal)) {
        return false;
      }
      if (index > 0) {
        if (yScale(el) - 40 > prevoiusYValue && yScale(el) + 30 < lowestScoreY) {
          prevoiusYValue = yScale(el);
          return true;
        }
        return false;
      }
      prevoiusYValue = yScale(el);
      if (yScale(el) + 30 < lowestScoreY && yScale(el) < yScale(goal) + 30) {
        return true;
      }
      return false;
    });
    const lowestGoal = withoutAchieved[withoutAchieved.length - 1];
    if (yScale(lowestGoal) < yScale(goal) - 30 || yScale(lowestGoal) > yScale(goal) + 30) {
      nonClustered.push(lowestGoal);
    }
    nonClustered.push(goal);

    return nonClustered.map(ms => {
          const value = (ms === goal) ? min([ms, highestYValue]) : ms;
          const label = ms;
          const path = (ms === goal) ? paths.trophy : ((ms <= yourScore) ? paths.check : paths.leaf);
          const classNameIcon = hasStarted ? (ms === goal) ? styles.trophy : ((ms <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf) : styles.hasntStarted;
          const classNameText = hasStarted ? (ms === goal) ? styles.progressedGoalsText : (ms <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText : styles.hasntStarted;
          return {value, label, path, classNameIcon, classNameText};
      });
  }
  else {
    const nonClustered = withoutAchieved.filter((el, index) => {
      if (index > 0) {
        if (yScale(el) - 40 > prevoiusYValue && yScale(el) + 30 < lowestScoreY) {
          prevoiusYValue = yScale(el);
          return true;
        }
        return false;
      }
      prevoiusYValue = yScale(el);
      if (yScale(el) + 30 < lowestScoreY) {
        return true;
      }
      return false;
    });
    nonClustered.push(withoutAchieved[withoutAchieved.length - 1]);

    return nonClustered.map(ms => {
          const value = ms;
          const label = ms;
          const path = (ms <= yourScore) ? paths.check : paths.leaf;
          const classNameIcon = ms <= yourScore ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf;
          const classNameText = (ms <= yourScore && hasStarted) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText;
          return {value, label, path, classNameIcon, classNameText};
      });
  }
}
