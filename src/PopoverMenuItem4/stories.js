import {stories, className, func, bool, string} from '../duckyStories';
import PopoverMenuItem4 from './index';

stories(module, PopoverMenuItem4, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  icon: string('icon-star'),
  label: string('Menu Label'),
  onClick: func()
});
