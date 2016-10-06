import {stories, className, string, func} from '../duckyStories';
import IconDropdown from './index';

stories(module, IconDropdown, [
  'https://github.com/DuckyTeam/ducky-web/issues/787'
], {
  className: className(),
  icon: string('icon-duck'),
  onClick: func()
});
