import {stories, string, number} from '../duckyStories';
import CalculatorLabel1 from './index';

stories(module, CalculatorLabel1, [
  'https://github.com/DuckyTeam/ducky-web/issues/2101'
], {
  iconCurrent: string("icon-leaf"),
  iconGoal: string("icon-trophy"),
  toolTipText: string("Tooltip"),
  goalValue: number(90),
  value: number(10),
  maxValue: number(100)
});
