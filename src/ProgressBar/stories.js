import {stories, className, string, func, number} from '../duckyStories';
import ProgressBar from './index';

stories(module, ProgressBar, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  color: string('red'),
  onClick: func(),
  percent: number(25)
});
