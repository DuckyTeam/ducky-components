import {stories, oneOf, string, json, number} from '../duckyStories';
import Chart from './index';

stories(module, Chart, [
  'https://github.com/DuckyTeam/ducky-web/issues/624',
  'https://github.com/DuckyTeam/ducky-web/issues/626'
], {
  type: oneOf('bar', 'line'),
  data: json([{
    id: 12,
    value: 220,
    color: "#00ab97",
    image: "http//:fsfkjsld.no/img.jpg",
    label: "Strek1",
    onClick: console.log
  }, {
    id: 13,
    value: 333,
    image: "http//:fsfkjsld.no/img.jpg",
    label: "De nye Gitarkameratene",
    onClick: console.log
  }, {
    id: 14,
    value: 400,
    image: "http//:fsfkjsld.no/img.jpg",
    label: "Strek3"
  }, {
    id: 15,
    value: 173,
    image: "http//:fsfkjsld.no/img.jpg",
    label: "Strek4"
  }]),
  graphID: number(2),
  height: string('300px'),
  selected: number(12),
  member: number(12),
  goals: json([200, 400, 600, 800])
});

/*
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, number} from '@kadira/storybook-addon-knobs';
import Chart from './index';
import moment from 'moment';

const stories = storiesOf('Chart', module);
stories.addDecorator(withKnobs);
stories.add('BarChart', () => (
    <Chart
        type={"bar"}
        data={[
            {
                id: 12,
                value: number("Bar 1 value", 220),
                color: "#00ab97",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek1",
                onClick: console.log
            },
            {
                id: 13,
                value: number("Bar 2 value", 333),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "De nye Gitarkameratene",
                onClick: console.log
            },
            {
                id: 14,
                value: number("Bar 3 value", 400),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek3"
            },
            {
                id: 15,
                value: number("Bar 4 value", 173),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek4"
            }
        ].slice(0, number("Number of bars", 5))}
        graphID={2}
        height={"300px"}
        selected={number("Selected", 12)}
        member={number("Member of", 12)}
        goals={[200, 400, 600, 800]}
    />
));
stories.addDecorator(withKnobs);
stories.add('LineChart', () => (
  <Chart
    type={'line'}
    data={[
        {
          data: [
              {date: moment('05-May-2016'), value: 0},
              {date: moment('14-May-2016'), value: 40},
              {date: moment('15-May-2016'), value: 50},
              {date: moment('16-May-2016'), value: 100},
              {date: moment('22-May-2016'), value: 125},
              {date: moment('25-May-2016'), value: number('ID 12 score', 150)}
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
                {date: moment('25-May-2016'), value: number('ID 13 score', 450)}
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
                {date: moment('25-May-2016'), value: number('ID 14 score', 180)}
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
                {date: moment('25-May-2016'), value: number('ID 14 score', 215)}
            ],
            label: "Nord-Norge2",
            id: 15
        }
      ]}
    endDate={moment('31-May-2016')}
      goals={[200, 400, 600, 800]}
      graphID={1}
      height={"300px"}
      member={number("Member of", 12)}
      selected={number("Selected", 12)}
      startDate={moment('05-May-2016')}
  />
));
*/
