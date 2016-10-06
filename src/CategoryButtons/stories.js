import {stories, oneOf, func, className} from '../duckyStories';
import CategoryButtons from './index';

stories(module, CategoryButtons, [
  'https://github.com/DuckyTeam/ducky-web/issues/1289'
], {
  activeCategory: oneOf('food', 'consumption', 'energy', 'transport', 'social'),
  className: className(),
  onCategoryClick: func()
});
