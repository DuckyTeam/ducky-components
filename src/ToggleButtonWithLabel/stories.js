import {stories, bool, oneOf, string, className} from '../duckyStories';
import ToggleButtonWithLabel from './index';

stories(module, ToggleButtonWithLabel, [
  'https://github.com/DuckyTeam/ducky-web/issues/1586'
], {
  checked: bool(),
  className: className(),
  text: string('Label'),
  theme: oneOf('light', 'dark')
});
