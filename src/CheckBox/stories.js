import {stories, className, bool, func} from '../duckyStories';
import CheckBox from './index';

stories(module, CheckBox, [
  'https://github.com/DuckyTeam/ducky-web/issues/855'
], {
  checked: bool(),
  className: className(),
  onClick: func()
});
