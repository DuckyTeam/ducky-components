import {stories, className, func} from '../duckyStories';
import SectionFooterBack from './index';

stories(module, SectionFooterBack, [
  'https://github.com/DuckyTeam/ducky-web/issues/1454'
], {
  className: className(),
  onClick: func()
});
