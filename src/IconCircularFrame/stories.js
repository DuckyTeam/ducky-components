import {stories, className, string} from '../duckyStories';
import IconCircularFrame from './index';

stories(module, IconCircularFrame, [
  'https://github.com/DuckyTeam/ducky-web/issues/1976'
], {
  borderColor: string("green"),
  bgColor: string("yellow"),
  className: className(),
  icon: string("icon-duck")
});
