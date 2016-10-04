import React from 'react';
import {storiesOf} from '@kadira/storybook';
import LeaderboardHeader4 from './index.js';

storiesOf('LeaderboardHeader', module)
  .add('LeaderboardHeader4', () => (
    <div style={{width: 300}}>
      <LeaderboardHeader4 />
    </div>
  ));
