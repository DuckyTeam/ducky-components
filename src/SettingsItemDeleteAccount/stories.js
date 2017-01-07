import {stories, string, oneOf} from '../duckyStories';
import SettingsItemDeleteAccount from './index';

stories(module, SettingsItemDeleteAccount, [
  'https://github.com/DuckyTeam/ducky-web/issues/2515'
], {
  textDeleteAccount: string("Slett kontoen din"),
  textHistoryDelete: string("Aktiv siden august 2011")
});
