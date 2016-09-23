import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, number} from '@kadira/storybook-addon-knobs';
import LineChart from './index';

const stories = storiesOf('LineChart', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
    <LineChart
      data={[
          {
              data: [
                  {date: new Date(2016, 4, 12), value: 0},
                  {date: new Date(2016, 5, 12), value: 40}
              ],
              strokeColor: "#90A4AE",
              strokeWidth: 2,
              label: "Strek1"
          }, {
              data: [
                  {date: new Date(2016, 4, 12), value: 0},
                  {date: new Date(2016, 4, 14), value: 200},
                  {date: new Date(2016, 5, 12), value: 1100}
              ],
              strokeColor: "#FFC107",
              strokeWidth: 2,
              label: "Strek1"
          }, {
              data: [
                  {date: new Date(2016, 4, 12), value: 0},
                  {date: new Date(2016, 5, 3), value: 150},
                  {date: new Date(2016, 5, 10), value: 850}
              ],
              strokeColor: "#8BC34A",
              strokeWidth: 4,
              label: "Strek1",
              area: true
          }
      ]}
      startDate={new Date(2016, 4, 12)}
      endDate={new Date(2016, 6, 12)}
      graphID={1}
      height={"300px"}
    />
  ));
