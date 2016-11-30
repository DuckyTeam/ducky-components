import {stories, string, number} from '../duckyStories';
import CalculatorLabel1 from './index';

stories(module, CalculatorLabel1, [
  'https://github.com/DuckyTeam/ducky-web/issues/2101'
], {
  goal: string("77"),
  progressBarPercent: number(25),
  contentCurrent: string("10"),
  contentGoal: string("120"),
  iconCurrent: string("icon-leaf"),
  iconGoal: string("icon-trophy"),
  toolTipText: string("Tooltip")
});
