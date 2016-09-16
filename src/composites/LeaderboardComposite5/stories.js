import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LeaderboardComposite5 from '../LeaderboardComposite5';

storiesOf('LeaderboardComposite5', module)
  .add('any household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          householdActionsCount={14}
          householdCo2InChallenge={43}
          householdMemberCount={2}
          householdName={'Any Householding Navn'}
          householdRanking={5}
          progressRelativePercent={40}
      />
  ))
  .add('your household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          householdActionsCount={14}
          householdCo2InChallenge={43}
          householdMemberCount={2}
          householdName={'My Householding Navn'}
          householdRanking={5}
          progressRelativePercent={40}
          yourHousehold
      />
  ))
  .add('leader household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          householdActionsCount={14}
          householdCo2InChallenge={120}
          householdMemberCount={2}
          householdName={'Leader Householding Navn'}
          isLeader
      />
  ))
  .add('you are in leader household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          householdActionsCount={14}
          householdCo2InChallenge={120}
          householdMemberCount={2}
          householdName={'I am part of leader household'}
          isLeader
          yourHousehold
      />
  ));
