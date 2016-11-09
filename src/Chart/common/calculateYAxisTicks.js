import * as d3 from 'd3';

export default (goals, nextGoal, lowestScore, yScale) => {
  const visibleGoals = goals.slice(0, d3.max([d3.min([nextGoal ? goals.indexOf(nextGoal) : goals.length, goals.length]) + 1, 2]))
  visibleGoals.reverse();
  const withoutAchieved = visibleGoals.filter((el, index) => {
    return el >= lowestScore
  });
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
