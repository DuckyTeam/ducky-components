import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ChallengeDailyScoreInfo from './index';


storiesOf('ChallengeDailyScoreInfo', module)
  .add('inactive challenge - has not started', () => (
    <ChallengeDailyScoreInfo
      activities={'-'}
      challengeType={'household'}
      challengeStartDatetimeUTC={1474894600551}
      challengeEndDatetimeUTC={1475758626218}
      co2={'-'}
      currentDate={1474030728395}
      />
  ))
  .add('ongoing challenge', () => (
    <ChallengeDailyScoreInfo
      activities={'12'}
      challengeType={'household'}
      challengeStartDatetimeUTC={1473846941465}
      challengeEndDatetimeUTC={1476006953142}
      co2={'34'}
      currentDate={1474278923240}
      />
  ))
  .add('challenge ended', () => (
    <ChallengeDailyScoreInfo
      activities={'21'}
      challengeType={'points'}
      challengeStartDatetimeUTC={1473846941465}
      challengeEndDatetimeUTC={1473166641553}
      points={'43'}
      currentDate={1474030728395}
      />
  ))
