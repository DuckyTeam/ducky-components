import {stories, className, oneOf, number, bool} from '../duckyStories';
import ProfilePageMeta from './index';

stories(module, ProfilePageMeta, [
  'https://github.com/DuckyTeam/ducky-web/issues/1420',
  'https://github.com/DuckyTeam/ducky-web/issues/1421'
], {
  className: className(),
  toBeCompared: bool(),
  totalComparisonValue: number(12),
  totalUserValue: number(21),
  type: oneOf('points', 'co2', 'aktiviteter')
});
