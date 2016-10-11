import {stories, className, json, func, oneOf} from '../duckyStories';
import IconImage from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, IconImage, [
  'https://github.com/DuckyTeam/ducky-web/issues/582',
  'https://github.com/DuckyTeam/ducky-web/issues/583',
  'https://github.com/DuckyTeam/ducky-web/issues/584',
  'https://github.com/DuckyTeam/ducky-web/issues/585',
  'https://github.com/DuckyTeam/ducky-web/issues/586',
  'https://github.com/DuckyTeam/ducky-web/issues/587',
  'https://github.com/DuckyTeam/ducky-web/issues/588',
  'https://github.com/DuckyTeam/ducky-web/issues/589',
  'https://github.com/DuckyTeam/ducky-web/issues/590'
], {
  className: className(),
  icon: oneOf(iconImageImage),
  onClick: func(),
  size: oneOf('small', 'standard', 'large', 'display1', 'display2'),
  style: json({})
});
