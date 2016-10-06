import {stories, className, oneOf, string} from '../duckyStories';
import LabelTitle from './index';

stories(module, LabelTitle, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  icon: string('icon-duck'),
  size: oneOf('small', 'large1'),
  text: string('Ducky')
});
