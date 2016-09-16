import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import LeaderboardComposite4 from '../LeaderboardComposite4';

storiesOf('LeaderboardComposite4', module)
  .add('any team', () => (
      <LeaderboardComposite4
          level={3}
          teamActionsCount={145}
          teamMemberCount={140}
          teamName={'Nord-Norge'}
          teamRanking={2}
          teamTotalCo2={4946}
      />
  ))
  .add('your team', () => (
      <LeaderboardComposite4
          level={0}
          teamActionsCount={2}
          teamMemberCount={140}
          teamName={'Nord-Norge'}
          teamRanking={20}
          teamTotalCo2={30}
          yourTeam
      />
  ))
  .add('leader team', () => (
      <LeaderboardComposite4
          isLeader
          level={3}
          teamActionsCount={140}
          teamMemberCount={140}
          teamName={'Midt-Norge'}
          teamTotalCo2={908}
      />
  ))
  .add('you are leader', () => (
      <LeaderboardComposite4
          isLeader
          level={3}
          teamActionsCount={140}
          teamMemberCount={140}
          teamName={'Midt-Norge'}
          teamTotalCo2={908}
          yourTeam
      />
  ));
