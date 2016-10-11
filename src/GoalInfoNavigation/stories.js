import {stories, number, func} from '../duckyStories';
import GoalInfoNavigation from './index';

stories(module, GoalInfoNavigation, [
  'https://github.com/DuckyTeam/ducky-web/issues/1464'
], {
  currentSlide: number(1),
  handleLeftClick: func(),
  handleRightClick: func(),
  slideCount: number(5)
});
