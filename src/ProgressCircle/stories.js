import {stories, className, oneOf, number} from '../duckyStories';
import ProgressCircle from './index';

stories(module, ProgressCircle, [
  'https://github.com/DuckyTeam/ducky-web/issues/1431'
], {
  className: className(),
  percent: number(25),
  type: oneOf('co2', 'activity', 'habit', 'points')
});
