import {stories, className, oneOf, number} from '../duckyStories';
import ListCompositeSavings from './index';

stories(module, ListCompositeSavings, [
  'https://github.com/DuckyTeam/ducky-web/issues/822'
], {
  className: className(),
  savings: number(3),
  type: oneOf('points', 'co2')
});
