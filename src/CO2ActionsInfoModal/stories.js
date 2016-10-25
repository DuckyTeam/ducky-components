import {
  stories,
  bool,
  func,
  string} from '../duckyStories';

import CO2ActionsInfoModal from './index';

stories(module, CO2ActionsInfoModal, [
  'https://github.com/DuckyTeam/ducky-web/issues/1811'
], {
  bottomSectionImageUrl: string('https://cloud.githubusercontent.com/assets/13749577/19656295/b12443a4-9a1f-11e6-8788-f49dd7ae65f2.png'),
  onHide: func(),
  show: bool(true)
});
