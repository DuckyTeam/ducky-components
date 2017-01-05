import {stories, className, string, func} from '../duckyStories';
import SectionHeaderSubsection from './index';

stories(module, SectionHeaderSubsection, [
  'https://github.com/DuckyTeam/ducky-web/issues/2136'
], {
  className: className(),
  onClick: func(),
  leftIcon: string('icon-star'),
  rightIcon: string('icon-leaf'),
  title: string('Applikasjoner')
});
