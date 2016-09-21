import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .add('Flat Button Dark Theme', () => (
    <div style={{backgroundColor: '#aeacaa', padding: 10, width: '500px'}}>
      <Button
        disabled
        onClick={action('clicked')}
        theme={'dark'}
      >
          {"Flat button disabled"}
      </Button>
      <Button
        onClick={action('clicked')}
        theme={'dark'}
      >
          {"Flat button"}
      </Button>
    </div>
))
  .add('Flat Button Light Theme', () => (
    <div style={{backgroundColor: '#e3d9cd', padding: 10, width: '500px'}}>
      <Button
        disabled
        onClick={action('clicked')}
      >
        {"Flat button disabled"}
      </Button>
      <Button
        onClick={action('clicked')}
      >
        {"Flat button"}
      </Button>
    </div>
));
