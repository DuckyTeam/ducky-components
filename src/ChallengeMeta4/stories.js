import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import ChallengeMeta4 from './index';

storiesOf('ChallengeMeta4', module)
  .add('Your team', () => (
    <div style={{backgroundColor: '#07495d'}}>
      <ChallengeMeta4
        members={123}
        name={'Group Name'}
        team
      />
    </div>
  ))
  .add('Your team is in the lead', () => (
    <div style={{backgroundColor: '#07495d'}}>
      <ChallengeMeta4
        isLeader
        members={123}
        name={'Group Name'}
        team
      />
    </div>
  ))
  .add('Leader team', () => (
    <div style={{backgroundColor: '#07495d'}}>
      <ChallengeMeta4
        isLeader
        members={123}
        name={'Group Name'}
      />
    </div>
  ))
  .add('Other team', () => (
    <div style={{backgroundColor: '#07495d'}}>
      <ChallengeMeta4
        members={123}
        name={'Group Name'}
      />
    </div>
  ));
