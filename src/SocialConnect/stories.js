import {stories, bool, oneOf, func, className} from '../duckyStories';
import SocialConnect from './index';

stories(module, SocialConnect, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  connected: bool(),
  onClick: func(),
  socialMedia: oneOf('facebook', 'twitter', 'google+', 'instagram')
});
