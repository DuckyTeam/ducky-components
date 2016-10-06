import {stories, className, number, oneOf, string, func} from '../duckyStories';
import CreateGoalActionItem from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, CreateGoalActionItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/1450'
], {
  className: className(),
  co2: number(32),
  icon: oneOf(iconImageImage),
  onClick: func(),
  points: number(23),
  title: string('Action Title')
});
