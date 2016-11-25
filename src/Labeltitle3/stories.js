import {stories, className, string, json} from '../duckyStories';
import labelTitle3 from './index';

stories(module, labelTitle3, [
  'https://github.com/DuckyTeam/ducky-web/issues/2102'
], {
  className: className(),
  icon: string('icon-duck'),
  style: json({color: '#607d8b'}),
  label: string('Ducky')
});
