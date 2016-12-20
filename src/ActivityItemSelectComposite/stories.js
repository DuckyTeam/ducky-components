import {stories, className, string, oneOf, number, func} from '../duckyStories';
import ActivityItemSelectComposite from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, ActivityItemSelectComposite, [
  'https://github.com/DuckyTeam/ducky-web/issues/1448'
], {
  className: className(),
  co2: number(23),
  icon: oneOf(iconImageImage),
  onClick: func(),
  points: number(345),
  title: string('Aktivitet')
});
