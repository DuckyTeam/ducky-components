import {stories, className, func, string, number, bool, oneOf} from '../duckyStories';
import SettingsSectionAccount from './index';

stories(module, SettingsSectionAccount, [
  'https://github.com/DuckyTeam/ducky-web/issues/1585'
], {
  className: className(),
  title: string('Din konto'),
  email: string('test@email.no'),
  emailOnClick: func(),
  oldPassword: string(''),
  newPassword: string(''),
  confirmNewPassword: string(''),
  OnClick: func(),
  expanded: bool(false),
  inactive: bool(),
  onBlur: func(),
  onChange: func(),
  onClick: func(),
  onCloseClick: func(),
  onFocus: func(),
  onRadioButtonClicked: func(),
  onSaveButtonClicked: func(),
  textAreaLength: number(50),
  textSize: oneOf('default', 'large', 'huge'),
  text: string('Aktiv siden '),
  date: number(1319191481000)
});
