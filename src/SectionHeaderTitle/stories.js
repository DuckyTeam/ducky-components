import {stories, className, string, func} from '../duckyStories';
import SectionHeaderGeneral from './index';

stories(module, SectionHeaderGeneral, [
  'https://github.com/DuckyTeam/ducky-web/issues/871'
], {
  children: string('Meta text / labels'),
  className: className(),
  onClick: func(),
  title: string('Applikasjoner')
});
