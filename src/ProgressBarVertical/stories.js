import {stories, className, bool, oneOf, number} from '../duckyStories';
import ProgressBarVertical from './index';

stories(module, ProgressBarVertical, [
  'https://github.com/DuckyTeam/ducky-web/issues/1632'
], {
  className: className(),
  inactive: bool(),
  percent: number(85),
  type: oneOf('co2', 'points', 'red')
});
