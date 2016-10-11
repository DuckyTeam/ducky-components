import {stories, className, string, oneOf, number, func} from '../duckyStories';
import ListCompositeActivity from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, ListCompositeActivity, [
  'https://github.com/DuckyTeam/ducky-web/issues/779'
], {
  className: className(),
  co2: number(12.2),
  icon: oneOf(iconImageImage),
  onIconClick: func(),
  onLabelClick: func(),
  points: number(2),
  title: string('Aktvitet med langt navn')
});
