import {stories, className, string, func} from '../duckyStories';
import SectionHeaderGeneral from './index';

stories(module, SectionHeaderGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/654'
], {
  children: string('Meta text / labels'),
  className: className(),
  leftIcon: string('icon-tune'),
  onClick: func(),
  rightIcon: string('icon-add'),
  title: string('Applikasjoner')
});
