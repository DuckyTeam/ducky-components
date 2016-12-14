import {stories, className, func, bool, string} from '../duckyStories';
import PopoverMenuItem4 from './index';

stories(module, PopoverMenuItem4, [
  'https://github.com/DuckyTeam/ducky-web/issues/1272'
], {
  className: className(),
  icon: string('icon-star'),
  inactive: bool(false),
  label: string('Menu Label'),
  onClick: func()
});
