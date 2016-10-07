import {stories, bool, func, string} from '../duckyStories';
import TextImageElement from './index';

stories(module, TextImageElement, [
  'https://github.com/DuckyTeam/ducky-web/issues/618'
], {
  children: string('Component'),
  onClick: func(),
  showFullText: bool()
});
