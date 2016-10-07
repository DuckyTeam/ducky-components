import {stories, className, func} from '../duckyStories';
import SectionFooterCancelLeft from './index';

stories(module, SectionFooterCancelLeft, [
  'https://github.com/DuckyTeam/ducky-web/issues/1453'
], {
  className: className(),
  onClick: func()
});
