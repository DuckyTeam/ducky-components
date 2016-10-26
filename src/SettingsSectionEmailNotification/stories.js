import {
  stories,
  bool,
  func,
  number} from '../duckyStories';

import SettingSectionEmailNotification from './index';

stories(module, SettingSectionEmailNotification, [
  'https://github.com/DuckyTeam/ducky-web/issues/1591'
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
  notificationValue: number(4)
});
