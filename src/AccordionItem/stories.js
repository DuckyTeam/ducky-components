import {stories, string, bool, func} from '../duckyStories';
import AccordionItem from './index';

stories(module, AccordionItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/2171'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  title: string("Viernes de cervezas")
});
