import React from 'react';
import {storiesOf, linkTo} from '@kadira/storybook';
import ChallengeMeta6 from './index';

storiesOf('ChallengeMeta6', module)
  .add('Default', () => (
    <div style={{width: '320px'}}>
      <ChallengeMeta6
        members={321}
        name={'Awesome Team Name'}
        onClick={linkTo('ChallengeMeta6', 'Selected')}
      />
    </div>
  ))
  .add('Selected', () => (
    <div style={{width: '320px'}}>
      <ChallengeMeta6
        members={321}
        name={'Awesome Team Name'}
        selected
      />
    </div>
  ));
