import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SettingsItemEmail from './index';

storiesOf('SettingsItemEmail', module)
  .add('default', () => (
      <SettingsItemEmail
          email={'veldiglangepostadresse@hotmail.com'}
      />
  ))
  .add('inactive', () => (
      <div style={{width: 250}}>
          <SettingsItemEmail
              email={'veldiglangepostadresse@hotmail.com'}
              inactive
          />
      </div>
  ));
