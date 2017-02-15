import {stories, oneOf, json, func, bool, number} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/2975'
], {
  data:json([{
    id: 12,
    value: 140
  }, {
    id: 13,
    value: 1005
  }, {
    id: 14,
    value: 320
  }, {
    id: 15,
    value: 520
  }]),
  graphID: json(1),
  memberOf: json(12),
  selectedId: json(12),
  onClick: func(),
  daysToStart: number(0)
}, 'Chart/BarChartMobile');
