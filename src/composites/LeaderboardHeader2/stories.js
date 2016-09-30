import React from 'react';
import {storiesOf} from '@kadira/storybook';
import LeaderboardHeader2 from '../LeaderboardHeader2';

storiesOf('LeaderboardHeader', module)
  .add('LeaderboardHeader2', () => (
    <div style={{width: 500}}>
      <LeaderboardHeader2 />
    </div>
  ));
