import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ChallengeDailyScorebars from './index';

storiesOf('ChallengeDailyScorebars', module)
  .add('profileChallenge', () => (
      <ChallengeDailyScorebars
          barType={'co2'}
          challengeEndDatetimeUTC={1475272800000}
          challengeStartDatetimeUTC={1472680800000}
          currentDate={1474236000000}
          dailyActivitiesCount={
              {
                  1473976800000: 10,
                  1474063200000: 15,
                  1474236000000: 12
              }
            }
          totalActivitiesCount={15}
      />
))
.add('householdChallenge', () => (
    <ChallengeDailyScorebars
        barType={'co2'}
        challengeEndDatetimeUTC={1475272800000}
        challengeStartDatetimeUTC={1472680800000}
        currentDate={1474236000000}
        dailyActivitiesCount={
            {
                1473976800000: 10,
                1474063200000: 15,
                1474236000000: 12
            }
          }
        householdChallenge
        loggedDays={
            {
                1473976800000: true,
                1474236000000: true
            }
        }
        totalActivitiesCount={15}
    />
));
