import {stories, className, bool, string, number, func, oneOf} from '../duckyStories';
import GoalCompositeProgressInfo from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, GoalCompositeProgressInfo, [
  'https://github.com/DuckyTeam/ducky-web/issues/1445'
], {
  className: className(),
  content: string('6 / 10'),
  endDate: string('30-Sep-2016'),
  finished: bool(),
  goalPointsAmount: number(100),
  handleButtonClick: func(),
  icon: oneOf(iconImageImage),
  numberDays: number(14),
  numberRegistration: number(24),
  percentage: number(69),
  savingsAmount: number(500),
  selectedActivityName: string('Unnga matkasting'),
  startDate: string('03-Sep-2015'),
  type: oneOf('habit', 'points', 'activity', 'co2')
});
