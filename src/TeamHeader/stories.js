import {stories, className, string, func, oneOf, json} from '../duckyStories';
import TeamHeader from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, TeamHeader, [
  'https://github.com/DuckyTeam/ducky-web/issues/570'
], {
  className: className(),
  teamName: string("The best team"),
  time: json(Date.now()),
  place: json(2)
});
