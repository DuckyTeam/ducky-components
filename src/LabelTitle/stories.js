import {stories, className, oneOf, string} from '../duckyStories';
import LabelTitle from './index';

stories(module, LabelTitle, [
  'https://github.com/DuckyTeam/ducky-web/issues/966',
  'https://github.com/DuckyTeam/ducky-web/issues/971'
], {
  className: className(),
  icon: string('icon-duck'),
  size: oneOf('small', 'large'),
  text: string('Ducky')
});
