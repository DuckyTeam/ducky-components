import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, number} from '@kadira/storybook-addon-knobs';
import BarChart from './index';

const stories = storiesOf('BarChart', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
    <BarChart
        data={[
            {
                id: 12,
                value: number("Bar 1 value", 403),
                color: "#00ab97",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek1",
                onClick: console.log
            },
            {
                id: 13,
                value: number("Bar 2 value", 436),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek2",
                onClick: console.log
            },
            {
                id: 14,
                value: number("Bar 3 value", 531),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek3"
            },
            {
                id: 15,
                value: number("Bar 4 value", 173),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek4"
            },
            {
                id: 16,
                value: number("Bar 5 value", 273),
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek5"
            }
        ].slice(0, number("Number of bars", 5))}
        graphID={2}
        height={"300px"}
        selected={number("Selected", 12)}
        member={number("Member of", 12)}
    />
  ));
