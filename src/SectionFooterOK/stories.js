import {stories, className, bool, string, func} from '../duckyStories';
import SectionFooterOK from './index';

stories(module, SectionFooterOK, [
  'https://github.com/DuckyTeam/ducky-web/issues/1399'
], {
  buttonName: string('OK'),
  className: className(),
  disabled: bool(),
  onClick: func()
});
