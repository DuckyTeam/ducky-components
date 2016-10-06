import {stories, className, bool, string, number, func, oneOf} from '../duckyStories';
import GoalDescriptionGeneral from './index';

stories(module, GoalDescriptionGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1443'
], {
  className: className(),
  endDate: string('30-Sep-2016'),
  finished: bool(),
  goalPointsAmount: number(100),
  handleMoreClick: func(),
  numberDays: number(14),
  numberRegistration: number(24),
  onClick: func(),
  savingsAmount: number(500),
  selectedActivityName: string('Unnga matkasting'),
  show: bool(),
  startDate: string('03-Sep-2015'),
  type: oneOf('habit', 'points', 'activity', 'co2')
});
