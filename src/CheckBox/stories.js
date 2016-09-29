import React from 'react';
import {storiesOf, linkTo} from '@kadira/storybook';
import CheckBox from './index';

storiesOf('CheckBox', module)
  .add('CheckBox default', () => (
    <CheckBox
      onClick={linkTo('CheckBox', 'CheckBox active')}
    />
))
  .add('CheckBox active', () => (
    <CheckBox
      checked
    />
));
