import {stories, className, string} from '../duckyStories';
import LabelTab from './index';

stories(module, LabelTab, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  icon: string('icon-duck'),
  label: string('Ducky')
});
