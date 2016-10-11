import {stories, number, bool, oneOf, func} from '../duckyStories';
import LabelPair from './index';

stories(module, LabelPair, [
  'https://github.com/DuckyTeam/ducky-web/issues/620',
  'https://github.com/DuckyTeam/ducky-web/issues/621'
], {
  co2: oneOf(12, null),
  onClick: func(),
  onlyDays: bool(),
  points: number(2),
  time: number(1475241124937)
});
