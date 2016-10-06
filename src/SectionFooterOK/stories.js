import {stories, className, bool, string, func} from '../duckyStories';
import SectionFooterOK from './index';

stories(module, SectionFooterOK, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  buttonName: string('New'),
  className: className(),
  disabled: bool(),
  onClick: func()
});
