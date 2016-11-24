import {stories, className, number, oneOf} from '../duckyStories';
import ProgressBarChallengeDates from './index';

stories(module, ProgressBarChallengeDates, [
  'https://github.com/DuckyTeam/ducky-web/issues/2097'
], {
  className: className(),
  endDate: number(1481639610731),
  startDate: number(1479480305546),
  theme: oneOf('light', 'light')
});
