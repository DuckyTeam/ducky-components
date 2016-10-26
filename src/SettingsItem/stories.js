import {stories, className, func, bool, string} from '../duckyStories';
import SettingsItem from './index';

stories(module, SettingsItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/1577'
], {
  children: string('Component'),
  className: className(),
  expanded: bool(),
  onCloseClick: func(),
  onSaveButtonClicked: func(),
  inactive: bool(),
  label: string('Setting to change'),
  onClick: func(),
  value: string('Value being changed')
});
