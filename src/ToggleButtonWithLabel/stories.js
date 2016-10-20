import {stories, bool, oneOf, func, string, className} from '../duckyStories';
import ToogleButtonWithLabel from './index';

stories(module, ToogleButtonWithLabel, [
  'https://github.com/DuckyTeam/ducky-web/issues/1586'
], {
  checked: bool(),
  className: className(),
  text: string('Label'),
  theme: oneOf('light', 'dark')
});
