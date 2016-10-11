import {stories, className, bool, json, func} from '../duckyStories';
import ActionItemSummaryComposit from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, ActionItemSummaryComposit, [
  'https://github.com/DuckyTeam/ducky-web/issues/713'
], {
  className: className(),
  expanded: bool(),
  icons: json([iconImageImage, iconImageImage, iconImageImage, iconImageImage,
      iconImageImage, iconImageImage, iconImageImage, iconImageImage, iconImageImage
  ]),
  onClick: func()
});
