import {stories, className, string, oneOf, number} from '../duckyStories';
import ProfileSectionPersonalGoal from './index';

stories(module, ProfileSectionPersonalGoal, [
  'https://github.com/DuckyTeam/ducky-web/issues/1465'
], {
  children: string('Component'),
  className: className(),
  currentSlide: number(2),
  numberGoals: number(5),
  profileType: oneOf('self', 'others'),
  slideCount: number(6)
});
