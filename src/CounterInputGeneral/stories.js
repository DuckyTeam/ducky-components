<<<<<<< HEAD
import {
  number,
  string,
  func,
  stories} from '../duckyStories';

=======
import {stories, className, bool, string, func, oneOf} from '../duckyStories';
>>>>>>> master
import CounterInputGeneral from './index';

stories(module, CounterInputGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1999'
], {
<<<<<<< HEAD
  onClick: func(),
  value: number(7),
  valueType: string('NOK (kroner)')
=======
  className: className(),
  inactiveNegative: bool(),
  inactivePositive: bool(false),
  label: string("NOK (kroner)"),
  onClick: func(),
  resultNumber: string("0")
>>>>>>> master
});
