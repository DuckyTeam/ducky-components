import {stories, bool, func, className} from '../duckyStories';
import SocialConnectComposit2 from './index';

stories(module, SocialConnectComposit2, [
  'https://github.com/DuckyTeam/ducky-web/issues/1335'
], {
  className: className(),
  connectedFacebook: bool(false),
  connectedGoogle: bool(false),
  connectedTwitter: bool(true),
  onClick: func()
});
