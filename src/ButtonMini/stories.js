import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ButtonMini from './index';

storiesOf('ButtonMini', module)
  .add('Fill theme ', () => (
    <ButtonMini
      icon={'icon-add'}
      theme={'fill'}
    />
))
  .add('Border theme ', () => (
    <ButtonMini
      icon={'icon-add'}
      theme={'border'}
    />
));
