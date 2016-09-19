import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LeaderboardHeader from '../LeaderboardHeader';

storiesOf('LeaderboardHeader', module)
  .add('Individual team', () => (
      <LeaderboardHeader />
  ))
  .add('Household team', () => (
      <LeaderboardHeader
          householdChallenge
      />
  ));
