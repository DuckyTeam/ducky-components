import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ProgressBarVertical from '../ProgressBarVertical';

storiesOf('ProgressBarVertical', module)
  .add('inactive', () => (
      <ProgressBarVertical
          inactive
      />
  ))
  .add('CO2', () => (
      <ProgressBarVertical
          percent={75}
          type={'CO2'}
      />
  ))
  .add('points', () => (
      <ProgressBarVertical
          percent={50}
          type={'points'}
      />
  ));
