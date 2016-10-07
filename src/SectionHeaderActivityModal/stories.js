import {stories, className, bool, func} from '../duckyStories';
import SectionHeaderActivityModal from './index';

stories(module, SectionHeaderActivityModal, [
  'https://github.com/DuckyTeam/ducky-web/issues/819'
], {
  className: className(),
  favorite: bool(),
  onClick: func(),
  onIconClose: func()
});
