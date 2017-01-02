import {stories, className, func, string, bool} from '../duckyStories';
import LogAllButton from './index';

stories(module, LogAllButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/2127'
], {
  checked: bool(false),
  className: className(),
  inactive: bool(true),
  isLoggingActivity: bool(false),
  logAllText: string('Logg alle'),
  onClick: func(),
  partiallyChecked: bool(false)
});
