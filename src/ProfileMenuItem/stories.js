import {stories, className, func, oneOf, number, string} from '../duckyStories';
import ProfileMenuItem from './index';

stories(module, ProfileMenuItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/1424'
], {
  className: className(),
  dateOfLastActivity: string('30-Aug-2016'),
  numberChallenges: number(3),
  numberGoals: number(1),
  onClick: func(),
  percentCompare: number(98),
  profileType: oneOf('self', 'others'),
  totalSavings: number(69),
  type: oneOf('personal', 'insight', 'footprint', 'challenges', 'activity')
});
