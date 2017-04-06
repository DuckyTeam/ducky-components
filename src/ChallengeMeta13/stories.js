import {stories, oneOf, bool, className, number, string} from '../duckyStories';
import ChallengeMeta13 from './index';

stories(module, ChallengeMeta13, [], {
  className: className(),
  isUserSection: bool(),
  theme: oneOf('light', 'dark'),
  participantPercentage: number(65),
  sectionName: string('Test Section'),
  expectedParticipants: number(24),
  participantCount: number(12)
});
