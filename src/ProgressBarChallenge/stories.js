import {stories, string, number} from '../duckyStories';
import progressBarChallengeDates from './index';

stories(module, progressBarChallengeDates, [
  'https://github.com/DuckyTeam/ducky-web/issues/2083'
], {
  color: string('red'),
  endDate: number(1481639610731),
  startDate: number(1479480305546)
});
