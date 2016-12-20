import {stories, className, string, number, oneOf, func} from '../duckyStories';
import ActivityItemDefault from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, ActivityItemDefault, [
  'https://github.com/DuckyTeam/ducky-web/issues/712'
], {
  className: className(),
  co2: number(12.2),
  iconSVG: oneOf(iconImageImage),
  onActionClick: func(),
  onLogClick: func(),
  points: number(2),
  title: string('Aktvitet med langt navn')
});
