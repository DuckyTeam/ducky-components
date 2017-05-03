import {stories, oneOf, json, func, bool, number, string} from './../../duckyStories';
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
  }, {
    id: 16,
    value: 1005
  }, {
    id: 17,
    value: 320
  }, {
    id: 18,
    value: 520
  }, {
    id: 19,
    value: 1005
  }, {
    id: 20,
    value: 320
  }, {
    id: 21,
    value: 520
  }, {
    id: 22,
    value: 1005
  }, {
    id: 23,
    value: 320
  }, {
    id: 24,
    value: 520
  }, {
    id: 25,
    value: 520
  }, {
    id: 26,
    value: 1005
  }, {
    id: 27,
    value: 320
  }, {
    id: 28,
    value: 520
  }]),
  graphID: json(1),
  memberOf: json(12),
  selectedId: json(12),
  onClick: func(),
  height: string('300px'),
  daysToStart: number(0)
}, 'Chart/BarChartMobile');
