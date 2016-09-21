import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ButtonIconRaised from './index';

storiesOf('ButtonIcon', module)
  .add('Raised button with icon, light theme ', () => (
    <div style={{backgroundColor: '#ededed', padding: 10, width: '500px'}}>
      <ButtonIconRaised
        disabled
        icon={'icon-star_border'}
        onClick={action('clicked')}
      >
          {"INACTIVE"}
      </ButtonIconRaised>
      <ButtonIconRaised
        icon={'icon-star_border'}
        onClick={action('clicked')}
      >
          {"BUTTON-ICON"}
      </ButtonIconRaised>
    </div>
))
  .add('Raised button with icon, dark theme ', () => (
    <div style={{backgroundColor: '#4b4a5b', padding: 10, width: '500px'}}>
      <ButtonIconRaised
        disabled
        icon={'icon-star_border'}
        onClick={action('clicked')}
        theme={'dark'}
      >
          {"INACTIVE"}
      </ButtonIconRaised>
      <ButtonIconRaised
        icon={'icon-star_border'}
        onClick={action('clicked')}
        theme={'dark'}
      >
          {"BUTTON-ICON"}
      </ButtonIconRaised>
    </div>
));
