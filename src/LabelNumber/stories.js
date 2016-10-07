import {stories, className, bool, oneOf, number, string} from '../duckyStories';
import LabelNumber from './index';

stories(module, LabelNumber, [
  'https://github.com/DuckyTeam/ducky-web/issues/888'
], {
  animation: bool(),
  className: className(),
  decimals: number(1),
  number: number(99),
  textcontent: string('Total innsparing'),
  theme: oneOf('light', 'dark')
});
