import {stories, className, bool, func} from '../duckyStories';
import GoalComposit1 from './index';

stories(module, GoalComposit1, [
  'https://github.com/DuckyTeam/ducky-web/issues/1433'
], {
  className: className(),
  finishedGoal: bool(),
  handleTypoClick: func(),
  onClick: func()
});
