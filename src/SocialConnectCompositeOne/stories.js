import {
  stories,
  bool} from '../duckyStories';

import SocialConnectCompositeOne from './index';

stories(module, SocialConnectCompositeOne, [
  'https://github.com/DuckyTeam/ducky-web/issues/1334'
], {
  connectedFacebook: bool(false),
  connectedGoogle: bool(false),
  connectedTwitter: bool(true)
});
