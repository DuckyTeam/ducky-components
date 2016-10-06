import {stories, className, oneOf, string, number} from '../duckyStories';
import ScrollContainer from './index';

stories(module, ScrollContainer, [
], {
  children: string('Component'),
  className: className(),
  scrollOnUpdate: oneOf('bottom', 'top'),
  size: number(200)
});
