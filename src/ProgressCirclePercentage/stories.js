import {stories, className, func, bool, string, number, oneOf, json} from '../duckyStories';
import ProgressCirclePercentage from './index';

stories(module, ProgressCirclePercentage, [
  'https://github.com/DuckyTeam/ducky-web/issues/3116'
], {
  className: className(),
  percent: number(25),
  type: string('points')
});
