import {stories, oneOf, number, string, func, bool, className} from '../duckyStories';
import CarouselStandard1 from './index';

stories(module, CarouselStandard1, [
  'https://github.com/DuckyTeam/ducky-web/issues/859'
], {
  children: string('component'),
  className: className(),
  handleLeftClick: func(),
  handleRightClick: func(),
  leftactive: bool(),
  rightactive: bool(),
  slideCount: number(5),
  theme: oneOf('light', 'dark')
});
