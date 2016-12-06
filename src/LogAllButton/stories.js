import {stories, className, func, bool} from '../duckyStories';
import LogAllButton from './index';

stories(module, LogAllButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/2167'
], {
  checked: bool(),
  className: className(),
  inactive: bool(),
  onClick: func(),
  partiallyChecked: bool()
});
