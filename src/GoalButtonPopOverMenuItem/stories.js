import {stories, className, bool, func} from '../duckyStories';
import GoalButtonPopOverMenuItem from './index';

stories(module, GoalButtonPopOverMenuItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/1441'
], {
  className: className(),
  onActivityClick: func(),
  onClick: func(),
  show: bool()
});
