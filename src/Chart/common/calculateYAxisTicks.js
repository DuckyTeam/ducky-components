import { min, max } from 'd3-array';

export default (goals, nextGoal, yourScore, yScale) => {
  const visibleGoals = goals.slice(0, max([min([nextGoal ? goals.indexOf(nextGoal) : goals.length, goals.length]) + 1, 2]))
  visibleGoals.reverse();
  const indexOfNextGoal = visibleGoals.indexOf(visibleGoals.reduce((current, goal) => (goal > yourScore) ? goal : current, 0));
  const withoutAchieved = visibleGoals.slice(0, min([indexOfNextGoal + 2, visibleGoals.length]));
  let prevoiusYValue;
  const lowestScoreY = yScale(withoutAchieved[withoutAchieved.length - 1]);
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
  return nonClustered;
}
