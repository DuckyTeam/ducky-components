import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ProgressBarVertical from '../ProgressBarVertical';

storiesOf('ProgressBarVertical', module)
  .add('CO2', () => (
      <ProgressBarVertical
          percent={75}
          type={'CO2'}
      />
  ))
  .add('points', () => (
      <ProgressBarVertical
          percent={30}
          type={'points'}
      />
  ))
  .add('inactive', () => (
      <ProgressBarVertical
          inactive
      />
  ));
