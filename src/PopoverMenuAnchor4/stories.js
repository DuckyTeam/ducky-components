import {stories, className, func, string} from '../duckyStories';
import PopoverMenuAnchor4 from './index';

stories(module, PopoverMenuAnchor4, [
  'https://github.com/DuckyTeam/ducky-web/issues/1575'
], {
  children: string('Component'),
  className: className(),
  onClick: func()
});
