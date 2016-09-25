import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, number} from '@kadira/storybook-addon-knobs';
import Chart from './index';

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
                {date: new Date(2016, 4, 12), value: 0},
                {date: new Date(2016, 5, 12), value: number('Line 1 Score', 40)}
            ],
            strokeColor: "#90A4AE",
            strokeWidth: 2,
            label: "Strek1",
            id: 12
        }, {
            data: [
                {date: new Date(2016, 4, 12), value: 0},
                {date: new Date(2016, 4, 14), value: 200},
                {date: new Date(2016, 5, 12), value: 400}
            ],
            strokeColor: "#FFC107",
            strokeWidth: 2,
            label: "Strek1",
            id: 13
        }, {
            data: [
                {date: new Date(2016, 4, 12), value: 0},
                {date: new Date(2016, 5, 3), value: 150},
                {date: new Date(2016, 5, 10), value: 50}
            ],
            strokeColor: "#8BC34A",
            strokeWidth: 4,
            label: "Strek1",
            area: true,
            id: 14
        }
    ]}
    startDate={new Date(2016, 4, 12)}
    endDate={new Date(2016, 6, 12)}
    graphID={1}
    height={"300px"}
    selected={number("Selected", 12)}
    member={number("Member of", 12)}
    member={13}
    goals={[200, 400, 600, 800]}
  />
));
