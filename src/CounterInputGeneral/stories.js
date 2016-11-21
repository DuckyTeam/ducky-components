import {stories, className, bool, string, func, oneOf} from '../duckyStories';
import CounterInputGeneral from './index';

stories(module, CounterInputGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1999'
], {
  className: className(),
  inactiveNegative: bool(),
  inactivePositive: bool(false),
  label: string("NOK (kroner)"),
  onClick: func(),
  resultNumber: string("0")
});
