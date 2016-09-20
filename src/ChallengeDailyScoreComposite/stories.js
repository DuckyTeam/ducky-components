import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ChallengeDailyScoreComposite from './index';

storiesOf('ChallengeDailyScoreComposite', module)
  .add('profileChallenge - co2', () => (
      <ChallengeDailyScoreComposite
          activitiesLoggedCurrentDate={12}
          barType={'co2'}
          challengeEndDatetimeUTC={1475272800000}
          challengeStartDatetimeUTC={1472680800000}
          challengeType={'individual'}
          co2={27.3}
          currentDate={1474322400000}
          dailyActivitiesCount={
              {
                  1472767200000: 10,
                  1473458400000: 15,
                  1474236000000: 7,
                  1474322400000: 12
              }
            }
          totalActivitiesCount={15}
      />
  ))
  .add('profileChallenge - points', () => (
      <ChallengeDailyScoreComposite
          activitiesLoggedCurrentDate={12}
          barType={'points'}
          challengeEndDatetimeUTC={1475272800000}
          challengeStartDatetimeUTC={1472680800000}
          challengeType={'individual'}
          currentDate={1474322400000}
          dailyActivitiesCount={
              {
                  1472767200000: 10,
                  1473458400000: 15,
                  1474236000000: 7,
                  1474322400000: 12
              }
            }
          points={35}
          totalActivitiesCount={15}
      />
  ))
  .add('profileChallenge not started', () => (
      <ChallengeDailyScoreComposite
          activitiesLoggedCurrentDate={'-'}
          barType={'co2'}
          challengeEndDatetimeUTC={1477000800000}
          challengeStartDatetimeUTC={1474408800000}
          challengeType={'individual'}
          co2={'-'}
          currentDate={1474322400000}
          totalActivitiesCount={15}
      />
  ))
  .add('householdChallenge - CO2', () => (
      <ChallengeDailyScoreComposite
          activitiesLoggedCurrentDate={12}
          barType={'co2'}
          challengeEndDatetimeUTC={1475272800000}
          challengeStartDatetimeUTC={1472680800000}
          challengeType={'household'}
          co2={27.3}
          currentDate={1474322400000}
          dailyActivitiesCount={
              {
                  1472767200000: 10,
                  1473458400000: 15,
                  1474236000000: 7,
                  1474322400000: 12
              }
            }
          householdChallenge
          loggedDays={
              {
                  1472767200000: true,
                  1474236000000: true
              }
          }
          totalActivitiesCount={15}
      />
  ))
  .add('householdChallenge - points', () => (
      <ChallengeDailyScoreComposite
          activitiesLoggedCurrentDate={12}
          barType={'points'}
          challengeEndDatetimeUTC={1475272800000}
          challengeStartDatetimeUTC={1472680800000}
          challengeType={'household'}
          currentDate={1474322400000}
          dailyActivitiesCount={
              {
                  1472767200000: 10,
                  1473458400000: 15,
                  1474236000000: 7,
                  1474322400000: 12
              }
            }
          householdChallenge
          loggedDays={
              {
                  1472767200000: true,
                  1474236000000: true
              }
          }
          points={30}
          totalActivitiesCount={15}
      />
  ));
