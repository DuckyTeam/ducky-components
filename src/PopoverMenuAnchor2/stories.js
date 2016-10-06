import {stories, className, func, string} from '../duckyStories';
import PopoverMenuAnchor2 from './index';

stories(module, PopoverMenuAnchor2, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className(),
  icon: string('icon-star_border'),
  onClick: func()
});
