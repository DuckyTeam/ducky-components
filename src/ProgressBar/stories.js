import {stories, className, string, func, number, json, oneOf} from '../duckyStories';
import ProgressBar from './index';

stories(module, ProgressBar, [
  'https://github.com/DuckyTeam/ducky-web/issues/900',
  'https://github.com/DuckyTeam/ducky-web/issues/1931',
  'https://github.com/DuckyTeam/ducky-web/issues/2100'
], {
  className: className(),
  children: string(),
  color: string('red'),
  onClick: func(),
  percent: number(25),
  size: oneOf('standard', 'wide')
});
