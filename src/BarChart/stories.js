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
                value: number("Bar 1 value", 403),
                color: "#8BC34A",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek1"
            },
            {
                value: number("Bar 2 value", 436),
                color: "#CFD8FC",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek2"
            },
            {
                value: number("Bar 3 value", 231),
                color: "#CFD8FC",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek3"
            },
            {
                value: number("Bar 4 value", 173),
                color: "#CFD8FC",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek4"
            },
            {
                value: number("Bar 5 value", 273),
                color: "#FFC107",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek5"
            }
        ].slice(0, number("Number of bars", 5))}
        graphID={2}
        height={"300px"}
    />
  ));
