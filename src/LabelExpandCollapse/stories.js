import {stories, className, string, func, bool} from '../duckyStories';
import LabelExpandCollapse from './index';

stories(module, LabelExpandCollapse, [
  'https://github.com/DuckyTeam/ducky-web/issues/2997'
], {
  className: className(),
  children: string('Components'),
  onClick: func(),
  expanded: bool()
});
