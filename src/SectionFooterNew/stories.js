import {stories, oneOf, className, string} from '../duckyStories';
import SectionFooterNew from './index';

stories(module, SectionFooterNew, [
  'https://github.com/DuckyTeam/ducky-web/issues/1455',
  'https://github.com/DuckyTeam/ducky-web/issues/1456',
  'https://github.com/DuckyTeam/ducky-web/issues/1457',
  'https://github.com/DuckyTeam/ducky-web/issues/1458'
], {
  className: className(),
  buttonText: string('FULLFØR'),
  text: string('AVBRYT'),
  type: oneOf("SEF005", "SEF006", "SEF007", "SEF008"),
  icon: oneOf('icon-keyboard_arrow_left', '')
});
