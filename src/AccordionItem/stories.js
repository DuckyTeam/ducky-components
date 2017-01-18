import {stories, className, string, func, bool} from '../duckyStories';
import AccordionItem from './index';

stories(module, AccordionItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/2171'
], {
  className: className(),
  onClick: func(),
  expanded: bool(),
  leftIcon: string('icon-star'),
  title: string('AccordionItem')
});
