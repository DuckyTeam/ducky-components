import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ButtonCounter from './index';

storiesOf('ButtonCounter', module)
  .add('Small', () => (
    <ButtonCounter
      number={45}
      onClick={action('clicked')}
      size={'small'}
    />
))
  .add('Standard', () => (
    <ButtonCounter
      number={1002}
      onClick={action('clicked')}
      size={'standard'}
    />
));
