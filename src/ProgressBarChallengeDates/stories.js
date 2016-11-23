import {stories, string, number} from '../duckyStories';
import ProgressBarChallengeDates from './index';

stories(module, ProgressBarChallengeDates, [
  'https://github.com/DuckyTeam/ducky-web/issues/2083'
], {
  color: string('red'),
  endDate: number(1481639610731),
  startDate: number(1479480305546)
});
