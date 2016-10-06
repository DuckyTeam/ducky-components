import {stories, className, func, bool, string} from '../duckyStories';
import SettingsItemEmail from './index';

stories(module, SettingsItemEmail, [
  'https://github.com/DuckyTeam/ducky-web/issues/1583'
], {
  className: className(),
  email: string('test@email.no'),
  inactive: bool(),
  onClick: func()
});
