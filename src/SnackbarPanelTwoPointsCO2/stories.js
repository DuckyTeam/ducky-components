import {
  bool,
  stories,
  number,
  string} from '../duckyStories';

import SnackbarPanelTwoPointsCO2 from './index';

stories(module, SnackbarPanelTwoPointsCO2, [
  'https://github.com/DuckyTeam/ducky-web/issues/815'
], {
  messageText: string('Test Message'),
  pointValue: number(999),
  savingValue: number(999),
  show: bool(true)
});
