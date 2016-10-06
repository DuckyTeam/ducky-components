import {stories, className, func, string} from '../duckyStories';
import PopoverMenuAnchor4 from './index';

stories(module, PopoverMenuAnchor4, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className(),
  onClick: func()
});
