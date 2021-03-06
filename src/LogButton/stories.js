import {stories, className, func, bool, string} from '../duckyStories';
import LogButton from './index';

stories(module, LogButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/710'
], {
  checked: bool(),
  className: className(),
  inactive: bool(false),
  icon: string(),
  onClick: func()
});
