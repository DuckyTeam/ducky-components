import {stories, className, string} from '../duckyStories';
import CreateGoalValueInput2 from './index';

stories(module, CreateGoalValueInput2, [
  'https://github.com/DuckyTeam/ducky-web/issues/1460'
], {
  className: className(),
  icon: string('icon-leaf'),
  text: string('example text'),
  number: string('13')
});
