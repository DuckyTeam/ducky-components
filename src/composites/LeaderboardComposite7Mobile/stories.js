import React from 'react';
import {storiesOf} from '@kadira/storybook';
import LeaderboardComposite7 from '../LeaderboardComposite7Mobile';

storiesOf('LeaderboardComposite7 - LBCo7', module)
  .add('Your team', () => (
    <div style={{width: 300}}>
      <LeaderboardComposite7
          teamRanking = {2}
          teamName = {'Midt-Norge'}
          yourTeam
          opened
          teamMemberCount = {3}
          teamTotalCo2={500}
          />
    </div>
  ))
  .add('Leader', () => (
    <div style={{width: 300}}>
      <LeaderboardComposite7
          teamRanking = {1}
          teamName = {'Midt-Norge'}
          isLeader
          opened
          teamMemberCount = {3}
          teamTotalCo2={500}
          />
    </div>
  ))
  .add('any team', () => (
    <div style={{width: 300}}>
      <LeaderboardComposite7
          teamRanking = {2}
          teamName = {'Midt-Norge'}
          teamMemberCount = {3}
          teamTotalCo2={500}
          />
    </div>
  ))
  .add('your team - leader', () => (
    <div style={{width: 300}}>
      <LeaderboardComposite7
          teamRanking = {1}
          yourTeam
          isLeader
          teamName = {'Midt-Norge'}
          teamMemberCount = {3}
          teamTotalCo2={500}
          />
    </div>
  ));
