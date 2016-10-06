import {stories, className, string, number, func, oneOf} from '../duckyStories';
import HeaderCompositActivity from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, HeaderCompositActivity, [
  'https://github.com/DuckyTeam/ducky-web/issues/623'
], {
  activityIcon: oneOf(iconImageImage),
  children: string('Component'),
  className: className(),
  icon: string('icon-star'),
  iconValue: string('stars'),
  onIconClick: func(),
  title: string('Aktivitet')
});
