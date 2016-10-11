import {stories, className, func, string, bool, oneOf} from '../duckyStories';
import TextOnlyElement from './index';

stories(module, TextOnlyElement, [
  'https://github.com/DuckyTeam/ducky-web/issues/619'
], {
  category: oneOf('food', 'consumption', 'energy', 'transport', 'social'),
  children: string('Component'),
  className: className(),
  onClick: func(),
  showFullText: bool()
});
