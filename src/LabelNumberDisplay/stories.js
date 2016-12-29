import {
  oneOf,
  string,
  number,
  stories} from '../duckyStories';

import LabelNumberDisplay from './index';

stories(module, LabelNumberDisplay, [
  'https://github.com/DuckyTeam/ducky-web/issues/2157'
], {
  color: string('grey'),
  icon: string('icon-trophy'),
  theme: oneOf('light', 'dark'),
  label: string('kgCO2e'),
  value: number(9984.5)
});
