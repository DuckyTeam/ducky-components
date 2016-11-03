import {
  number,
  json,
  stories} from '../duckyStories';

import SwtichesToggleMenu from './index';

stories(module, SwtichesToggleMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/856'
], {
  checkedOption: number(0),
  options: json(['Option 1', 'Option 2', 'Option 3', 'Option 4'])
});
