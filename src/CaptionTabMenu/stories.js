import {stories, oneOf, func, className, json, number} from '../duckyStories';
import CaptionTabMenu from './index';

stories(module, CaptionTabMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/678'
], {
  alignment: oneOf('left', 'center', 'split'),
  changeTab: func(),
  className: className(),
  disabled: json([1]),
  selected: number(2),
  tabs: json([{label: "Foo", icon: "icon-cow"}, {label: "Bar", icon: "icon-duck"}])
});
