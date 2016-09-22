import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import ChallengeMeta4 from './index';

storiesOf('ChallengeMeta4', module)
  .add('Your team, dark background', () => (
    <div style={{backgroundColor: '#07495d', width: '200px'}}>
      <ChallengeMeta4
        members={123}
        name={'Group Name'}
        team
        theme={'dark'}
      />
    </div>
  ))
  .add('Your team is in the lead, dark background', () => (
    <div style={{backgroundColor: '#07495d', width: '200px'}}>
      <ChallengeMeta4
        isLeader
        members={123}
        name={'Group Name'}
        team
        theme={'dark'}
      />
    </div>
  ))
  .add('Leader team, dark background', () => (
    <div style={{backgroundColor: '#07495d', width: '200px'}}>
      <ChallengeMeta4
        isLeader
        members={123}
        name={'Group Name'}
        theme={'dark'}
      />
    </div>
  ))
  .add('Other team, dark background', () => (
    <div style={{backgroundColor: '#07495d', width: '200px'}}>
      <ChallengeMeta4
        members={123}
        name={'Group Name'}
        theme={'dark'}
      />
    </div>
  ))
  .add('Your team, light background', () => (
    <div style={{backgroundColor: 'rgba(195, 192, 179, 0.7)', width: '200px'}}>
      <ChallengeMeta4
        members={123}
        name={'Group Name'}
        team
      />
    </div>
  ))
  .add('Your team is in the lead, light background', () => (
    <div style={{backgroundColor: 'rgba(195, 192, 179, 0.7)', width: '200px'}}>
      <ChallengeMeta4
        isLeader
        members={123}
        name={'Group Name'}
        team
      />
    </div>
  ))
  .add('Leader team, light background', () => (
    <div style={{backgroundColor: 'rgba(195, 192, 179, 0.7)', width: '200px'}}>
      <ChallengeMeta4
        isLeader
        members={123}
        name={'Group Name'}
      />
    </div>
  ))
  .add('Other team, light background', () => (
    <div style={{backgroundColor: 'rgba(195, 192, 179, 0.7)', width: '200px'}}>
      <ChallengeMeta4
        members={123}
        name={'Group Name'}
      />
    </div>
  ));
