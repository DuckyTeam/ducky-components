import {stories, oneOf, bool, className, number, string, json} from '../duckyStories';
import ParticipationChart from './index';

stories(module, ParticipationChart, [], {
  percentage: number(50),
  expectedParticipantCounts: json(
    {
      total: 96

    }
  ),
  participantCounts: json(
    {
      total: 48
    }
)
});
