import {stories, className, string, json} from '../duckyStories';
import labelTitle4 from './index';

stories(module, labelTitle4, [
  'https://github.com/DuckyTeam/ducky-web/issues/2102'
], {
  className: className(),
  icon: string('icon-leaf'),
  style: json({color: '#607d8b'}),
  label: string('Ducky')
});
