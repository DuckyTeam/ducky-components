import {stories, className, func, number, bool, string} from '../duckyStories';
import LabelStandard from './index';

stories(module, LabelStandard, [
  'https://github.com/DuckyTeam/ducky-web/issues/614'
], {
  animation: bool(),
  className: className(),
  content: string(99),
  decimals: number(1),
  icon: string('icon-duck'),
  onClick: func()
});
