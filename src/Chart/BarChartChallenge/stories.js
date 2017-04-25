import {stories, oneOf, json, func, bool, number, string} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/3019'
], {
  data:json([{
    id: 1,
    value: 100,
    label: "Strek1"
  }, {
    id: 2,
    value: 105,
    label: "De nye Gitarkameratene"
  }, {
    id: 3,
    value: 120,
    label: "Strek3"
  }, {
    id: 4,
    value: 0,
    label: "Strek4"
  }, {
    id: 5,
    value: 145,
    label: "Strek5"
  }, {
    id: 6,
    value: 149,
    label: "De nye Gitarkameratene2"
  }, {
    id: 7,
    value: 200,
    label: "Strek6"
  }, {
    id: 8,
    value: 213,
    label: "Strek7"
  }, {
    id: 9,
    value: 340,
    label: "Strek8"
  }, {
    id: 10,
    value: 360,
    label: "9"
  }, {
    id: 11,
    value: 398,
    label: "Strek10"
  }, {
    id: 12,
    value: 406,
    label: "Strek11"
  }, {
    id: 13,
    value: 413,
    label: "Strek13"
  }, {
    id: 14,
    value: 510,
    label: "Strek114"
  }, {
    id: 15,
    value: 530,
    label: "Strek11|1"
  }, {
    id: 16,
    value: 600,
    label: "Strek1213"
  }, {
    id: 17,
    value: 754,
    label: "Strek3214"
  }]),
  goal: number(784),
  milestones: json([10, 25, 50, 100, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 5000, 10000]),
  graphID: json(1),
  height: string("300px"),
  memberOf: json(12),
  noLeader: bool(true),
  selectedId: json(12),
  onClick: func(),
  onClickCO2: func(),
  daysToStart: number(0),
  startDate: number(1493119815000)
}, 'Chart/BarChartChallenge');
