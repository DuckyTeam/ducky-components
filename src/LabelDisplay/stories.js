import {stories, oneOf, string, number, className} from '../duckyStories';
import LabelDisplay from './index';

stories(module, LabelDisplay, [
  'https://github.com/DuckyTeam/ducky-web/issues/915'
], {
  className: className(),
  icon: string('icon-brightness_high'),
  iconColor: string('red'),
  label: string('Total innsparing'),
  theme: oneOf('light', 'dark'),
  value: number(456)
});
