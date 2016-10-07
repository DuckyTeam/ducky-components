import {stories, className, number} from '../duckyStories';
import Counter from './index';

stories(module, Counter, [
], {
  className: className(),
  decimals: number(2),
  number: number(21)
});
