import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ActionButton from '../ActionButton';

storiesOf('Avatar', module)
  .add('standard', () => (
    <ActionButton
      onClick={action('clicked')}
      size="standard"
    >
      Test
    </ActionButton>
  ))
  .add('main', () => (
    <ActionButton
      onClick={action('clicked')}
      size="main"
    >
      Test
    </ActionButton>
  ))
