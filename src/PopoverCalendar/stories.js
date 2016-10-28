import {stories, func, oneOf, number, string} from '../duckyStories';
import PopoverCalendar from './index';

stories(module, PopoverCalendar, [
  'https://github.com/DuckyTeam/ducky-web/issues/1293'
], {
  // color: string('green'),
  onClick: func(),
  // style: json({color: 'blue'}),
  month: oneOf('Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'),
  language: string('nb'),
  year: number('2309')

});
