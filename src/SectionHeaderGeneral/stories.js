import {stories, className, string, func, bool, oneOf} from '../duckyStories';
import SectionHeaderGeneral from './index';

stories(module, SectionHeaderGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/2108'
], {
  className: className(),
  onClick: func(),
  headerOpt: oneOf('title', 'icon', ''),
  rightIcon: string('icon-star'),
  title: string('some quite long title on this section')
});
