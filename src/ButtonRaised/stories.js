import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ButtonRaised from './index';

storiesOf('Button', module)
  .add('Raised Button Dark Theme', () => (
    <div style={{backgroundColor: '#aeacaa', padding: 10, width: '500px'}}>
      <ButtonRaised
        disabled
        onClick={action('clicked')}
        theme={'dark'}
      >
        {"Raised button disabled"}
      </ButtonRaised>
      <ButtonRaised
        onClick={action('clicked')}
        theme={'dark'}
      >
        {"Raised button"}
      </ButtonRaised>
    </div>
))
  .add('Raised Button Light Theme', () => (
    <div style={{backgroundColor: '#e3d9cd', padding: 10, width: '500px'}}>
      <ButtonRaised
        disabled
        onClick={action('clicked')}
      >
        {"Raised button disabled"}
      </ButtonRaised>
      <ButtonRaised
        onClick={action('clicked')}
      >
        {"Raised button"}
      </ButtonRaised>
    </div>
));
