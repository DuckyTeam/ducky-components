import {stories, className, func, bool, oneOf, string} from '../duckyStories';
import SettingsItemAppConnect from './index';

stories(module, SettingsItemAppConnect, [
  'https://github.com/DuckyTeam/ducky-web/issues/1592'
], {
  className: className(),
  onClick: func(),
  connected: bool(),
  socialMedia: oneOf('facebook', 'twitter', 'google+', 'instagram'),
  userName: string('Navn Navnesen')
});
