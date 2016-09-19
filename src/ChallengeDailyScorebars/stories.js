import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ChallengeDailyScorebars from './index';

storiesOf('ChallengeDailyScorebars', module)
  .add('profileChallenge', () => (
      <ChallengeDailyScorebars
          barType={'co2'}
          challengeEndDate={'01-Oct-2016'}
          challengeStartDate={'01-Sep-2016'}
          dailyActivitiesCount={
              {
                  1473976800000: 10,
                  1474063200000: 15,
                  1474236000000: 12
              }
            }
          todayDate={'19-Sep-2016'}
          totalActivitiesCount={15}
      />
))
.add('householdChallenge', () => (
    <ChallengeDailyScorebars
        barType={'co2'}
        challengeEndDate={'01-Oct-2016'}
        challengeStartDate={'01-Sep-2016'}
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
        todayDate={'19-Sep-2016'}
        totalActivitiesCount={15}
    />
));
