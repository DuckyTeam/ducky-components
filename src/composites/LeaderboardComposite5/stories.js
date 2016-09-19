import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LeaderboardComposite5 from '../LeaderboardComposite5';

storiesOf('LeaderboardComposite5', module)
  .add('any household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          challengeType={'household'}
          actionsCount={14}
          co2InChallenge={43}
          householdMemberCount={2}
          name={'Any Householding Navn'}
          ranking={5}
          progressRelativePercent={40}
      />
  ))
  .add('your household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          challengeType={'household'}
          actionsCount={14}
          co2InChallenge={43}
          householdMemberCount={2}
          name={'My Householding Navn'}
          ranking={5}
          progressRelativePercent={40}
          yourHousehold
      />
  ))
  .add('leader household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          challengeType={'household'}
          actionsCount={14}
          co2InChallenge={120}
          householdMemberCount={2}
          name={'Leader Householding Navn'}
          isLeader
      />
  ))
  .add('you are in leader household', () => (
      <LeaderboardComposite5
          avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
          challengeType={'household'}
          actionsCount={14}
          co2InChallenge={120}
          householdMemberCount={2}
          name={'I am part of leader household'}
          isLeader
          yourHousehold
      />
  ))
    .add('any profile', () => (
        <LeaderboardComposite5
            avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
            challengeType={'profile'}
            actionsCount={14}
            co2InChallenge={43}
            name={'Any Profile Navn'}
            ranking={5}
            progressRelativePercent={40}
        />
    ))
    .add('your profile', () => (
        <LeaderboardComposite5
            avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
            challengeType={'profile'}
            actionsCount={14}
            co2InChallenge={43}
            name={'My Profile Navn'}
            ranking={5}
            progressRelativePercent={40}
        />
    ))
    .add('leader profile', () => (
        <LeaderboardComposite5
            avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
            challengeType={'profile'}
            actionsCount={14}
            co2InChallenge={120}
            name={'Leader Profile Navn'}
            isLeader
        />
    ))
    .add('you are the leader profile', () => (
        <LeaderboardComposite5
            avatarURL={'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg'}
            challengeType={'profile'}
            actionsCount={14}
            co2InChallenge={120}
            name={'I am the leader profile'}
            isLeader
        />
    ));
