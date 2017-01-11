import {
  string,
  number,
  func,
  stories} from '../duckyStories';

import FootprintCategoryEdit from './index';

stories(module, FootprintCategoryEdit, [
  'https://github.com/DuckyTeam/ducky-web/issues/2450'
], {
  icon: string(),
  label: string('kgCO2e'),
  rightIcon: string(),
  onClick: func(),
  value: number(1210)
});
