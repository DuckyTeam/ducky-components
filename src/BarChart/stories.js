import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, object} from '@kadira/storybook-addon-knobs';
import BarChart from './index';

storiesOf('BarChart', module).addDecorator(withKnobs)
  .add('State1', () => (
    <BarChart
        data={object('Data',[
            {
                value: 500,
                color: "#8BC34A",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek1"
            },
            {
                value: 1523,
                color: "#CFD8FC",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek2"
            },
            {
                value: 493,
                color: "#CFD8FC",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek3"
            },
            {
                value: 454,
                color: "#CFD8FC",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek4"
            },
            {
                value: 324,
                color: "#FFC107",
                image: "http//:fsfkjsld.no/img.jpg",
                label: "Strek5"
            }
        ])}
        graphID={2}
        height={"300px"}
    />
  ));
