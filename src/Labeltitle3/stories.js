import {stories, className, string, json} from '../duckyStories';
import LabelTitle3 from './index';

stories(module, LabelTitle3, [
  'https://github.com/DuckyTeam/ducky-web/issues/2102'
], {
  className: className(),
  icon: string('icon-duck'),
  label: string('Ducky'),
  style: json({color: '#607d8b'})
});
