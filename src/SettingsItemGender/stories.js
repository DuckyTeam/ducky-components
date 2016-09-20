import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SettingsItemGender from './index';

storiesOf('SettingsItemGender', module)
  .add('Default', () => (
      <SettingsItemGender
          gender={'Kvinne'}
      />
  ))
  .add('Edit Mode', () => (
      <SettingsItemGender
          editMode
          gender={'Kvinne'}
      />
  ));
