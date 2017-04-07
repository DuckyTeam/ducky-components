import {stories, oneOf, bool, className, number, string, json} from '../duckyStories';
import ParticipationList from './index';

stories(module, ParticipationList, [], {

  sectionKey: string('Test Section 3'),
  expectedParticipantCounts: json(
    {
      "Test Section 1": 48,
      "Test Section 2": 48,
      "Test Section 3": 48,
      "Test Section 4": 48,
      "Test Section 5": 48,
      "Test Section 6": 48,
      "Test Section 7": 48,
      "Test Section 8": 48,
      "Test Section 9": 48,
      "Test Section 10": 48,
      "Test Section 11": 48,
      "Test Section 12": 48,
      "Test Section 13": 48,
      "Test Section 14": 48
    }
  ),
  sections: json({
    "Test Section 1": {
      "name": "Test Section 1"
    },
    "Test Section 2": {
      "name": "Test Section 2"
    },
    "Test Section 3": {
      "name": "Test Section 3"
    },
    "Test Section 4": {
      "name": "Test Section 4"
    },
    "Test Section 5": {
      "name": "Test Section 5"
    },
    "Test Section 6": {
      "name": "Test Section 6"
    },
    "Test Section 7": {
      "name": "Test Section 7"
    },
    "Test Section 8": {
      "name": "Test Section 8"
    },
    "Test Section 9": {
      "name": "Test Section 9"
    },
    "Test Section 10": {
      "name": "Test Section 10"
    },
    "Test Section 11": {
      "name": "Test Section 11"
    },
    "Test Section 12": {
      "name": "Test Section 12"
    },
    "Test Section 13": {
      "name": "Test Section 13"
    },
    "Test Section 14": {
      "name": "Test Section 14"
    }
  }),
  participantCounts: json(
    {
      "Test Section 1": 48,
      "Test Section 2": 46,
      "Test Section 3": 44,
      "Test Section 4": 42,
      "Test Section 5": 40,
      "Test Section 6": 38,
      "Test Section 7": 36,
      "Test Section 8": 36,
      "Test Section 9": 34,
      "Test Section 10": 30,
      "Test Section 11": 26,
      "Test Section 12": 22,
      "Test Section 13": 18,
      "Test Section 14": 10
    })
});
