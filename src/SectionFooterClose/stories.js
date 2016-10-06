import {stories, className, bool, string, func} from '../duckyStories';
import SectionFooterClose from './index';

stories(module, SectionFooterClose, [
  'https://github.com/DuckyTeam/ducky-web/issues/820'
], {
  className: className(),
  onClick: func()
});
