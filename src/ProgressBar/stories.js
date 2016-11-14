import {stories, className, string, func, number, oneOf} from '../duckyStories';
import ProgressBar from './index';

stories(module, ProgressBar, [
  'https://github.com/DuckyTeam/ducky-web/issues/900',
  'https://github.com/DuckyTeam/ducky-web/issues/1931'
], {
  className: className(),
  color: string('red'),
  onClick: func(),
  percent: number(25),
  size: oneOf('standard', 'wide')
});
