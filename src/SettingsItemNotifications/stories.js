import {stories, func, bool} from '../duckyStories';
import SettingsItemNotifications from './index';

stories(module, SettingsItemNotifications, [
  'https://github.com/DuckyTeam/ducky-web/issues/1587'
], {
  checked: bool(),
  expanded: bool(),
  inactive: bool(),
  onClick: func(),
  onCloseClick: func(),
  onSaveButtonClick: func()
});
