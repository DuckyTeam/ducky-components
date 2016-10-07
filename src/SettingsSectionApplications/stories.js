import {stories, className, func, string, bool} from '../duckyStories';
import SettingsSectionApplications from './index';

stories(module, SettingsSectionApplications, [
  'https://github.com/DuckyTeam/ducky-web/issues/1593'
], {
  className: className(),
  facebookConnected: bool(),
  googlePlusConnected: bool(),
  onClick: func(),
  twitterConnected: bool(),
  userName: string('Navn Navnesen')
});
