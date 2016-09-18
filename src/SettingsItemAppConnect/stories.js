import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SettingsItemAppConnect from './index';

storiesOf('SettingsItemAppConnect', module)
  .add('connected', () => (
      <SettingsItemAppConnect
          connected
          socialMedia={'Facebook'}
          userName={'Sara Kannan'}
      />
  ))
  .add('Not connected', () => (
      <SettingsItemAppConnect
          socialMedia={'TWITTER'}
      />
  ));
