import {stories, className, func} from '../duckyStories';
import GoalButtonBig from './index';

stories(module, GoalButtonBig, [
  'https://github.com/DuckyTeam/ducky-web/issues/1432'
], {
  className: className(),
  onClick: func()
});
