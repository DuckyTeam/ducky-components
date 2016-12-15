import {stories, className, func, string, bool} from '../duckyStories';
import LogAllButton from './index';

stories(module, LogAllButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/2167'
], {
  checked: bool(),
  className: className(),
  inactive: bool(),
  isLoggingActivity: bool(false),
  logAllText: string('Logg alle'),
  onClick: func(),
  partiallyChecked: bool()
});
