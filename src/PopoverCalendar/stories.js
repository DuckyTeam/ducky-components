import {stories, func, string} from '../duckyStories';
import PopoverCalendar from './index';

stories(module, PopoverCalendar, [
  'https://github.com/DuckyTeam/ducky-web/issues/1293'
], {
  color: string('green'),
  onClick: func(),
  // style: json({color: 'blue'}),
  children: string('Måned 2120')

});
