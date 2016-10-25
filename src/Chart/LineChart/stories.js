import moment from 'moment';
import {stories, oneOf, json} from './../../duckyStories';
import LineChart from './index';

stories(module, LineChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/1662'
], {
  data:json([
      {
        data: [
            {date: moment('05-May-2016'), value: 0},
            {date: moment('14-May-2016'), value: 40},
            {date: moment('15-May-2016'), value: 50},
            {date: moment('16-May-2016'), value: 100},
            {date: moment('22-May-2016'), value: 125},
            {date: moment('25-May-2016'), value: 150}
        ],
        label: "De nye",
        id: 12
      },
      {
          data: [
              {date: moment('05-May-2016'), value: 0},
              {date: moment('06-May-2016'), value: 60},
              {date: moment('07-May-2016'), value: 200},
              {date: moment('16-May-2016'), value: 260},
              {date: moment('22-May-2016'), value: 300},
              {date: moment('25-May-2016'), value: 450}
          ],
          label: "Midt-Norge",
          id: 13
      },
      {
          data: [
              {date: moment('05-May-2016'), value: 0},
              {date: moment('08-May-2016'), value: 45},
              {date: moment('09-May-2016'), value: 100},
              {date: moment('15-May-2016'), value: 125},
              {date: moment('23-May-2016'), value: 145},
              {date: moment('25-May-2016'), value: 180}
          ],
          label: "Nord-Norge",
          id: 14
      },
      {
          data: [
              {date: moment('05-May-2016'), value: 0},
              {date: moment('08-May-2016'), value: 50},
              {date: moment('09-May-2016'), value: 105},
              {date: moment('15-May-2016'), value: 135},
              {date: moment('23-May-2016'), value: 166},
              {date: moment('25-May-2016'), value: 215}
          ],
          label: "Nord-Norge2",
          id: 15
      }
    ]),
    endDate: json(moment('25-May-2016')),
    goals: json([200, 400, 600, 800]),
    graphID: json(1),
    height: oneOf("300px", "400px"),
    memberOf: json(12),
    selectedId: json(12),
    startDate: json(moment('05-May-2016')),
    onClick: json(null),
}, 'Chart/LineChart');
