import {stories, className, string, func, bool, oneOf} from '../duckyStories';
import SectionHeaderGeneral4 from './index';

stories(module, SectionHeaderGeneral4, [
  'https://github.com/DuckyTeam/ducky-web/issues/2108'
], {
  className: className(),
  onClick: func(),
  headerOpt: oneOf('both', 'title', 'icon'),
  icon: string('icon-leaf'),
  iconTitle: bool(),
  title: string('some quite long title on this section')
});
