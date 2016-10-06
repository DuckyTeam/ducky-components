import {stories, bool, func, string} from '../duckyStories';
import TextImageElement from './index';

stories(module, TextImageElement, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  onClick: func(),
  showFullText: bool()
});
