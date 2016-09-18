import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ActionButton from './index';

storiesOf('ActionButton', module)
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
