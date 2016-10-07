import {stories, className, bool, func, oneOf} from '../duckyStories';
import GoalMenuItem from './index';

stories(module, GoalMenuItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/1451'
], {
  className: className(),
  inactive: bool(),
  onClick: func(),
  type: oneOf('habit', 'points', 'activity', 'co2')
});
