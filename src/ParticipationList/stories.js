import {stories, oneOf, bool, className, number, string, json} from '../duckyStories';
import ParticipationList from './index';

stories(module, ParticipationList, [], {

  sectionKey: string('Test Section 3'),
  expectedParticipantCounts: json(
    {
      'Test Section 1': 48,
      'Test Section 2': 48,
      'Test Section 3': 48,
      'Test Section 4': 48
    }
  ),
  sections: json({
    'Test Section 1': {
      name: 'Test Section 1'
    },
    'Test Section 2': {
      name: 'Test Section 2'
    },
    'Test Section 3': {
      name: 'Test Section 3'
    },
    'Test Section 4': {
      name: 'Test Section 4'
    }
  }),
  participantCounts: json(
    {
      'Test Section 1': 48,
      'Test Section 2': 36,
      'Test Section 3': 24,
      'Test Section 4': 12
    }
)
});
