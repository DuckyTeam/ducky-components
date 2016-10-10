import {stories, className, func, string, number, bool, oneOf} from '../duckyStories';
import SettingsItemPassword from './index';

stories(module, SettingsItemPassword, [
  'https://github.com/DuckyTeam/ducky-web/issues/1584'
], {
  className: className(),
  confirmNewPassword: string(''),
  expanded: bool(),
  inactive: bool(),
  newPassword: string(''),
  oldPassword: string(''),
  onBlur: func(),
  onChange: func(),
  onClick: func(),
  onCloseClick: func(),
  onFocus: func(),
  onRadioButtonClicked: func(),
  onSaveButtonClicked: func(),
  textAreaLength: number(50),
  textSize: oneOf('default', 'large', 'huge')
});
