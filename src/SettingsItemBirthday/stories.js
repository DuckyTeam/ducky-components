import {stories, func, bool, string, number} from '../duckyStories';
import SettingsItemBirthday from './index';

stories(module, SettingsItemBirthday, [
  'https://github.com/DuckyTeam/ducky-web/issues/1579'
], {
  birthday: number(1477056474),
  day: number(22),
  month: string('March'),
  year: number(2010),
  expanded: bool(),
  onCloseClick: func(),
  onSaveButtonClicked: func(),
  inactive: bool(),
  onBirthdayClick: func()
});
