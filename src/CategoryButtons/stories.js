import {stories, oneOf, func, className} from '../duckyStories';
import CategoryButtons from './index';

stories(module, CategoryButtons, [
  'https://github.com/DuckyTeam/ducky-web/issues/1289'
], {
  activeCategory: oneOf('energy', 'transport'),
  className: className(),
  onCategoryClick: func()
});
