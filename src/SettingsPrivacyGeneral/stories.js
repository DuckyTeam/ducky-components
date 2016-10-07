import {stories, className, func, string} from '../duckyStories';
import SettingsPrivacyGeneral from './index';

stories(module, SettingsPrivacyGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1589'
], {
  className: className(),
  onClick: func(),
  privacySettings: string()
});
