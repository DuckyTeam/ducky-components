import {stories, bool, string, oneOf, number} from '../duckyStories';
import SnackBarPanel3 from './index';

stories(module, SnackBarPanel3, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  co2: number(23),
  duckyIcon: string('icon-add'),
  msgText: string('New Notification'),
  points: number(56),
  show: bool(),
  type: oneOf('points', 'co2', 'both')
});
