import {stories, className, bool, string, func} from '../duckyStories';
import RadioButton from './index';

stories(module, RadioButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  checked: bool(),
  className: className(),
  label: string('Radio'),
  onClick: func()
});
