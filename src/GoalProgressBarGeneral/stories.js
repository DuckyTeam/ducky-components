import {stories, className, string, number, func, oneOf} from '../duckyStories';
import GoalProgressBarGeneral from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, GoalProgressBarGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1444'
], {
  className: className(),
  content: string('69 / 500'),
  handleButtonClick: func(),
  icon: oneOf(iconImageImage),
  percentage: number(69),
  type: oneOf('habit', 'points', 'activity', 'co2')
});
