import {stories, className, bool, string, func} from '../duckyStories';
import SectionFooterCancelOK from './index';

stories(module, SectionFooterCancelOK, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  disabled: bool(),
  onCancel: func(),
  onClick: func()
});
