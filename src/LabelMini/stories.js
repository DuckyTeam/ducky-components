import {stories, className, string} from '../duckyStories';
import LabelMini from './index';

stories(module, LabelMini, [
  'https://github.com/DuckyTeam/ducky-web/issues/910'
], {
  className: className(),
  icon: string('icon-brightness_high'),
  label: string('99')
});
