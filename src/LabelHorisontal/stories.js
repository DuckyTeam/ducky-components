import {stories, oneOf, string, className} from '../duckyStories';
import LabelHorisontal from './index';

stories(module, LabelHorisontal, [
  'https://github.com/DuckyTeam/ducky-web/issues/846'
], {
  className: className(),
  icon: string('icon-brightness_high'),
  text: string('Total innsparing'),
  theme: oneOf('light', 'dark')
});
