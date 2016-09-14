import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SettingsSectionApplications from './index';

storiesOf('SettingsSectionApplications', module)
  .add('SettingsSectionApplications', () => (
      <SettingsSectionApplications
          twitterConnected
          userName={'Sara Kannan'}
      />
  ));
