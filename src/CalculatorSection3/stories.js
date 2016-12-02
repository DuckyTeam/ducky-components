import {
  bool,
  func,
  stories} from '../duckyStories';

import CalculatorSection3 from './index';

stories(module, CalculatorSection3, [
  'https://github.com/DuckyTeam/ducky-web/issues/2025'
], {
  show: bool(true),
  onHide: func()
});
