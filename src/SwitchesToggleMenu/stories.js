import {
  number,
  oneOf,
  stories} from '../duckyStories';

import SwtichesToggleMenu from './index';

stories(module, SwtichesToggleMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/856'
], {
  checkedOption: number(0)
});
