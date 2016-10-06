import {stories, oneOf, string, number, className} from '../duckyStories';
import LabelDouble from './index';

stories(module, LabelDouble, [
], {
  className: className(),
  color: string('red'),
  description: string('41%'),
  icon: string('icon-brightness_high'),
  label: string('Total innsparing')
});
