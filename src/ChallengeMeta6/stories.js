import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ChallengeMeta6 from './index';

storiesOf('ChallengeMeta6', module)
  .add('Default', () => (
    <div style={{width: '320px'}}>
      <ChallengeMeta6
        members={321}
        name={'Awesome Team Name'}
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
