import {stories, bool, oneOf, func, className} from '../duckyStories';
import SwitchToggleButton from './index';

stories(module, SwitchToggleButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/853'
], {
  checked: bool(),
  className: className(),
  onClick: func(),
  theme: oneOf('light', 'dark')
});
