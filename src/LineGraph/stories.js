import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, number} from '@kadira/storybook-addon-knobs';
import LineChart from './index';
import moment from 'moment';

const stories = storiesOf('LineChart', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
    <LineChart
      data={[
        {
            data: [
                {date: moment('05-May-2016').valueOf(), value: 0},
                {date: moment('14-May-2016').valueOf(), value: 40},
                {date: moment('15-May-2016').valueOf(), value: 50},
                {date: moment('16-May-2016').valueOf(), value: 100},
                {date: moment('22-May-2016').valueOf(), value: 125},
                {date: moment('25-May-2016').valueOf(), value: number('ID 12 score', 150)}
            ],
            label: "De nye",
            id: 12
        },
        {
            data: [
                {date: moment('05-May-2016').valueOf(), value: 0},
                {date: moment('06-May-2016').valueOf(), value: 60},
                {date: moment('07-May-2016').valueOf(), value: 200},
                {date: moment('16-May-2016').valueOf(), value: 260},
                {date: moment('22-May-2016').valueOf(), value: 300},
                {date: moment('25-May-2016').valueOf(), value: number('ID 13 score', 450)}
            ],
            label: "Midt-Norge",
            id: 13
        },
        {
            data: [
                {date: moment('05-May-2016').valueOf(), value: 0},
                {date: moment('08-May-2016').valueOf(), value: 45},
                {date: moment('09-May-2016').valueOf(), value: 100},
                {date: moment('15-May-2016').valueOf(), value: 125},
                {date: moment('23-May-2016').valueOf(), value: 145},
                {date: moment('25-May-2016').valueOf(), value: number('ID 14 score', 180)}
            ],
            label: "Nord-Norge",
            id: 14
        },
        {
            data: [
                {date: moment('05-May-2016').valueOf(), value: 0},
                {date: moment('08-May-2016').valueOf(), value: 50},
                {date: moment('09-May-2016').valueOf(), value: 105},
                {date: moment('15-May-2016').valueOf(), value: 135},
                {date: moment('23-May-2016').valueOf(), value: 166},
                {date: moment('25-May-2016').valueOf(), value: number('ID 14 score', 215)}
            ],
            label: "Nord-Norge2",
            id: 15
        }
      ]}
      endDate={moment('31-May-2016').valueOf()}
      goals={[200, 400, 600, 800]}
      graphID={1}
      height={"300px"}
      member={number("Member of", 12)}
      selected={number("Selected", 12)}
      startDate={moment('05-May-2016').valueOf()}
    />
  ));
