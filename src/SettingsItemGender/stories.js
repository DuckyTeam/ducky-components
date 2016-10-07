import {stories, className, func, bool, oneOf} from '../duckyStories';
import SettingsItemGender from './index';

stories(module, SettingsItemGender, [
  'https://github.com/DuckyTeam/ducky-web/issues/1580'
], {
  className: className(),
  editMode: bool(),
  gender: oneOf('kvinne', 'mann', 'kjøttpinne'),
  handleIconAvaWrapperClosed: func(),
  handleSaveButtonClicked: func(),
  inactive: bool(),
  onClick: func(),
  onRadioButtonClicked: func()
});
