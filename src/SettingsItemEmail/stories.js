import {stories, func, string} from '../duckyStories';
import SettingsItemEmail from './index';

stories(module, SettingsItemEmail, [
  'https://github.com/DuckyTeam/ducky-web/issues/1583'
], {
  email: string('test@email.no'),
  onClick: func()
});
