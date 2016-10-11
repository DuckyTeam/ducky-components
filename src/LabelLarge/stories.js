import {stories, func, string} from '../duckyStories';
import LabelLarge from './index';

stories(module, LabelLarge, [
  'https://github.com/DuckyTeam/ducky-web/issues/814'
], {
  content: string('99'),
  icon: string('icon-brightness_high'),
  onClick: func()
});
