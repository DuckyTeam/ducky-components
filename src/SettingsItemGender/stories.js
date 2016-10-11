import {stories, className, func, bool, oneOf} from '../duckyStories';
import SettingsItemGender from './index';

stories(module, SettingsItemGender, [
  'https://github.com/DuckyTeam/ducky-web/issues/1580'
], {
  className: className(),
  expanded: bool(),
  gender: oneOf('kvinne', 'mann', 'kjøttpinne'),
  inactive: bool(),
  onClick: func(),
  onCloseClick: func(),
  onRadioButtonClicked: func(),
  onSaveButtonClicked: func()
});
