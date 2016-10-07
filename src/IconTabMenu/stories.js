import {stories, oneOf, func, className, json, number} from '../duckyStories';
import TabMenu from './index';

stories(module, TabMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/933'
], {
  changeTab: func(),
  className: className(),
  disabled: json([1]),
  selected: number(2),
  tabs: json(['icon-cow', 'icon-duck', 'icon-pig'])
});
