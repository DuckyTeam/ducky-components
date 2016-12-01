import {stories, className, string, func, number, json, oneOf} from '../duckyStories';
import ProgressBar from './index';

stories(module, ProgressBar, [
  'https://github.com/DuckyTeam/ducky-web/issues/900',
  'https://github.com/DuckyTeam/ducky-web/issues/1931',
  'https://github.com/DuckyTeam/ducky-web/issues/2100'
], {
  className: className(),
  style: json({color: '#607d8b'}),
  goal: string("77"),
  onClick: func(),
  percent: number(25),
  size: oneOf('standard', 'wide'),
  value: number(),
  maxValue: number()
});
