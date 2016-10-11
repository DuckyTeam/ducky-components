import {stories, className, bool, string, func} from '../duckyStories';
import RadioButton from './index';

stories(module, RadioButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/854',
  'https://github.com/DuckyTeam/ducky-web/issues/1381'
], {
  checked: bool(),
  className: className(),
  label: string('Radio'),
  onClick: func()
});
