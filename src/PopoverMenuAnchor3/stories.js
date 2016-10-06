import {stories, className, func, string} from '../duckyStories';
import PopoverMenuAnchor3 from './index';

stories(module, PopoverMenuAnchor3, [
  'https://github.com/DuckyTeam/ducky-web/issues/769'
], {
  children: string('Component'),
  className: className(),
  onClick: func()
});
