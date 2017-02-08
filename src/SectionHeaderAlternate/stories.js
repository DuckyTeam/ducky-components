import {stories, className, string, func, bool, oneOf} from '../duckyStories';
import SectionHeaderAlternate from './index';

stories(module, SectionHeaderAlternate, [
  'https://github.com/DuckyTeam/ducky-web/issues/2987'
], {
  className: className(),
  onClickLeftIcon: func(),
  onClickRightIcon: func(),
  leftIcon: string('icon-star'),
  rightIcon: string('icon-star'),
  title: string('some quite long title on this section')
});
