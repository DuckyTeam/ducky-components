import {stories, func, bool, oneOf} from '../duckyStories';
import SettingsItemNotifications from './index';

stories(module, SettingsItemNotifications, [
  'https://github.com/DuckyTeam/ducky-web/issues/1587'
], {
  checkedSocialWarnings: bool(),
  checkedChallenges: bool(),
  checkedPersonalGoals: bool(),
  checkedNewsletter: bool(),
  expanded: bool(),
  inactive: bool(),
  onClick: func(),
  onCloseClick: func(),
  onSaveButtonClick: func(),
  notificationValue: oneOf(0, 1, 2, 3, 4)
});
