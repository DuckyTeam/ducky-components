import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ButtonIcon from './index';

storiesOf('ButtonIcon', module)
  .add('Flat button with icon, light theme ', () => (
    <div style={{backgroundColor: '#ededed', padding: 10, width: '500px'}}>
      <ButtonIcon
        disabled
        icon={'icon-star_border'}
        onClick={action('clicked')}
      >
          {"INACTIVE"}
      </ButtonIcon>
      <ButtonIcon
        icon={'icon-star_border'}
        onClick={action('clicked')}
      >
          {"BUTTON-ICON"}
      </ButtonIcon>
    </div>
))
  .add('Flat button with icon, dark theme ', () => (
    <div style={{backgroundColor: '#4b4a5b', padding: 10, width: '500px'}}>
      <ButtonIcon
        disabled
        icon={'icon-star_border'}
        onClick={action('clicked')}
        theme={'dark'}
      >
          {"INACTIVE"}
      </ButtonIcon>
      <ButtonIcon
        icon={'icon-star_border'}
        onClick={action('clicked')}
        theme={'dark'}
      >
          {"BUTTON-ICON"}
      </ButtonIcon>
    </div>
));
