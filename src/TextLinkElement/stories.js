import {stories, className, func, string, oneOf} from '../duckyStories';
import TextLinkElement from './index';

stories(module, TextLinkElement, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  category: oneOf('food', 'consumption', 'energy', 'transportation', 'social'),
  children: string('Component'),
  className: className(),
  onClick: func()
});
