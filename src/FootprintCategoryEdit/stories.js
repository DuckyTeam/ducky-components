import {
  string,
  number,
  stories} from '../duckyStories';

import FootprintCategoryEdit from './index';

stories(module, FootprintCategoryEdit, [
  'https://github.com/DuckyTeam/ducky-web/issues/2450'
], {
  footprintLabel: string('kgCO2e'),
  footprintValue: number(1210)
});
