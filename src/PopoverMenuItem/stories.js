import {stories, className, func, bool, string} from '../duckyStories';
import PopoverMenuItem from './index';

stories(module, PopoverMenuItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/765'
], {
  className: className(),
  icon: string('icon-work'),
  label: string('Menu Label'),
  onClick: func(),
  selected: bool()
});
