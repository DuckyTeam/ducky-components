import {stories, className, func, oneOf, string} from '../duckyStories';
import LabelSmall from './index';

stories(module, LabelSmall, [
  'https://github.com/DuckyTeam/ducky-web/issues/612'
], {
  className: className(),
  content: string('99'),
  icon: string('icon-brightness_high'),
  onClick: func(),
  typographyType: oneOf('bodyTextNormal')
});
