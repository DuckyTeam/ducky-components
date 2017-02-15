import {stories, oneOf, json, func, bool, number, string} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/3019'
], {
  data:json([{
    id: 1,
    value: 140,
    label: "Strek1"
  }, {
    id: 2,
    value: 105,
    label: "De nye Gitarkameratene"
  }, {
    id: 3,
    value: 322,
    label: "Strek3"
  }, {
    id: 4,
    value: 521,
    label: "Strek4"
  }, {
    id: 5,
    value: 140,
    label: "Strek5"
  }, {
    id: 6,
    value: 1205,
    label: "De nye Gitarkameratene2"
  }, {
    id: 7,
    value: 1212,
    label: "Strek6"
  }, {
    id: 8,
    value: 500,
    label: "Strek7"
  }, {
    id: 9,
    value: 340,
    label: "Strek8"
  }, {
    id: 10,
    value: 1305,
    label: "9"
  }, {
    id: 11,
    value: 20,
    label: "Strek10"
  }, {
    id: 12,
    value: 543,
    label: "Strek11"
  }, {
    id: 13,
    value: 563,
    label: "Strek13"
  }, {
    id: 14,
    value: 321,
    label: "Strek114"
  }, {
    id: 15,
    value: 343,
    label: "Strek11|1"
  }, {
    id: 16,
    value: 363,
    label: "Strek1213"
  }, {
    id: 17,
    value: 1212,
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
  daysToStart: number(0)
}, 'Chart/BarChartChallenge');
