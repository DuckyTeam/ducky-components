import React from 'react';
import {storiesOf} from '@kadira/storybook';
import LeaderboardHeader5 from './index.js';

storiesOf('LeaderboardHeader', module)
  .add('LeaderboardHeader5 - default challenge', () => (
    <div style={{width: 300}}>
      <LeaderboardHeader5 />
    </div>
  ))
  .add('LeaderboardHeader5 - household challenge', () => (
    <div style={{width: 300}}>
      <LeaderboardHeader5 household />
    </div>
  ));
