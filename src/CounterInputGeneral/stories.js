import {stories, className, bool, string, func, number, oneOf} from '../duckyStories';
import CounterInputGeneral from './index';

stories(module, CounterInputGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1999'
], {
  className: className(),
  label: string("NOK (kroner)"),
  decreaseValue: func(),
  inactiveNegative: bool(),
  inactivePositive: bool(),
  increaseValue: func(),
  operator: oneOf(['plus', 'remove']),
  resultNumber: string('20000'),
  units: string('kwh'),
  value: number(7)
});
