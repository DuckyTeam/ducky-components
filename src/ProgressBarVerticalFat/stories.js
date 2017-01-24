import {stories, className, bool, oneOf, func, number} from '../duckyStories';
import ProgressBarVerticalFat from './index';

stories(module, ProgressBarVerticalFat, [
  'https://github.com/DuckyTeam/ducky-web/issues/2926'
], {
  className: className(),
  onClick: func(),
  inactive: bool(false),
  percent: number(85),
  type: oneOf('co2', 'points', 'red')
});
