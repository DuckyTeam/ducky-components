import {stories, className, func, string} from '../duckyStories';
import PopoverMenuAnchor2 from './index';

stories(module, PopoverMenuAnchor2, [
  'https://github.com/DuckyTeam/ducky-web/issues/768'
], {
  children: string('Component'),
  className: className(),
  icon: string('icon-star_border'),
  onClick: func()
});
