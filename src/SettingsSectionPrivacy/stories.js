import {stories, className, func} from '../duckyStories';
import SettingsSectionPrivacy from './index';

stories(module, SettingsSectionPrivacy, [
  'https://github.com/DuckyTeam/ducky-web/issues/1590'
], {
  className: className(),
  handleButtonClick: func()
});
