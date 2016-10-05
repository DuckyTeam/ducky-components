import {stories, className, string, number, func} from '../duckyStories';
import ActionItemDefault from './index';

stories(module, ActionItemDefault, [
  'https://github.com/DuckyTeam/ducky-web/issues/712'
], {
  className: className(),
  co2: number(12.2),
  iconSVG: string('Transport01'),
  onActionClick: func(),
  onLogClick: func(),
  points: number(2),
  title: string('Aktvitet med langt navn')
});
