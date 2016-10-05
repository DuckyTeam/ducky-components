import {stories, className, string, number, func} from '../duckyStories';
import ListCompositeActivity from './index';

stories(module, ListCompositeActivity, [
  'https://github.com/DuckyTeam/ducky-web/issues/779'
], {
  className: className(),
  co2: number(12.2),
  icon: string('icon-duck'),
  onIconClick: func(),
  onLabelClick: func(),
  points: number(2),
  title: string('Aktvitet med langt navn')
});
