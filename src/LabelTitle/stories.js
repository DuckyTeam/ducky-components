import {stories, className, bool, number, oneOf, string} from '../duckyStories';
import LabelTitle from './index';

stories(module, LabelTitle, [
  'https://github.com/DuckyTeam/ducky-web/issues/966',
  'https://github.com/DuckyTeam/ducky-web/issues/971'
], {
  animation: bool(),
  className: className(),
  decimals: number(2),
  icon: string('icon-duck'),
  number: number(6),
  size: oneOf('small', 'large'),
  text: string('Ducky')
});
