import {stories, className, string, number, oneOf, func} from '../duckyStories';
import HeaderCompositUser from './index';

stories(module, HeaderCompositUser, [
  'https://github.com/DuckyTeam/ducky-web/issues/623'
], {
  category: oneOf('food', 'consumption', 'energy', 'transport', 'social'),
  children: string('Component'),
  className: className(),
  icon: string('icon-add'),
  iconValue: number(43),
  onIconClick: func(),
  onProfileClick: func(),
  title: string('Dette er et langt navn')
});
