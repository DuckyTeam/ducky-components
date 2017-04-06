import {stories, className, bool, oneOf, string, number} from '../duckyStories';
import ChallengeCardLabel1 from './index';

stories(module, ChallengeCardLabel1, [
  'https://github.com/DuckyTeam/ducky-web/issues/957'
], {
  className: className(),
  goal: bool(),
  percentValue: number(50),
  points: number(3),
  progPercent: number(50),
  type: oneOf('points', 'co2', 'activities', 'participants'),
  position: number(1),
  expectedParticipants: number(24),
  participantCount: number(12)
});
