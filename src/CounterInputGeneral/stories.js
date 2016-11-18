import {
  number,
  string,
  func,
  stories} from '../duckyStories';

import CounterInputGeneral from './index';

stories(module, CounterInputGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/1999'
], {
  onClick: func(),
  value: number(7),
  valueType: string('NOK (kroner)')
});
