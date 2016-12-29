import {stories, oneOf, number, className} from '../duckyStories';
import CarouselNavigator1 from './index';

stories(module, CarouselNavigator1, [
  'https://github.com/DuckyTeam/ducky-web/issues/857'
], {
  className: className(),
  slideCount: number(5),
  currentSlide: number(),
  theme: oneOf('light', 'dark')
});
