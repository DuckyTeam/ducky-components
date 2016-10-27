import {stories, bool, func, className, json, number} from '../duckyStories';
import IconTabMenu from './index';

stories(module, IconTabMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/933'
], {
  changeTab: func(),
  className: className(),
  disabled: json([1]),
  selected: number(2),
  //tabs: json({'Tooltip 1': 'icon-cow', 'Tooltip 2': 'icon-duck', 'Tooltip 3': 'icon-pig'}),
  tabs: json(['icon-cow', 'icon-duck', 'icon-star']),
  tooltipRequired: bool(false)
});
