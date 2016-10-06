import {stories, string, className} from '../duckyStories';
import LabelDouble from './index';

stories(module, LabelDouble, [
  'https://github.com/DuckyTeam/ducky-web/issues/917'
], {
  className: className(),
  color: string('red'),
  description: string('41%'),
  icon: string('icon-brightness_high'),
  label: string('Total innsparing')
});
