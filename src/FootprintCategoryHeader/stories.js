import {
  string,
  stories} from '../duckyStories';

import FootprintCategoryHeader from './index';

stories(module, FootprintCategoryHeader, [
  'https://github.com/DuckyTeam/ducky-web/issues/2426'
], {
  className: string(),
  icon: string('icon-home'),
  subTitle: string('Instillinger - April 2017'),
  title: string('Din husholdning')
});
