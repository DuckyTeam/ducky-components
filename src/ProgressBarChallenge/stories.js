import {stories, className, string, func, number, oneOf} from '../duckyStories';
import progressBarChallenge from './index';

stories(module, progressBarChallenge, [
  'https://github.com/DuckyTeam/ducky-web/issues/2083'
], {
  className: className(),
  color: string('red'),
  onClick: func(),
  size: oneOf('standard', 'wide'),
  endDate: string('30-Nov-2016'),
  startDate: string('30-Oct-2016')
});
