import {stories, oneOf, bool, className, number, string, json} from '../duckyStories';
import ParticipationChart from './index';

stories(module, ParticipationChart, [], {
  percentage: number(50),
  expectedParticipantCounts: number(96),
  participantCounts: number(48)
});
