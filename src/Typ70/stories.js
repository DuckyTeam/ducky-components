import {stories, className, string, func, oneOf} from '../duckyStories';
import Typography from './index';

stories(module, Typography, [
  'https://github.com/DuckyTeam/ducky-web/issues/598',
  'https://github.com/DuckyTeam/ducky-web/issues/599',
  'https://github.com/DuckyTeam/ducky-web/issues/600',
  'https://github.com/DuckyTeam/ducky-web/issues/601',
  'https://github.com/DuckyTeam/ducky-web/issues/602',
  'https://github.com/DuckyTeam/ducky-web/issues/603',
  'https://github.com/DuckyTeam/ducky-web/issues/604',
  'https://github.com/DuckyTeam/ducky-web/issues/605',
  'https://github.com/DuckyTeam/ducky-web/issues/606',
  'https://github.com/DuckyTeam/ducky-web/issues/607',
  'https://github.com/DuckyTeam/ducky-web/issues/608',
  'https://github.com/DuckyTeam/ducky-web/issues/609',
  'https://github.com/DuckyTeam/ducky-web/issues/610',
  'https://github.com/DuckyTeam/ducky-web/issues/611',
  'https://github.com/DuckyTeam/ducky-web/issues/676'
], {
  children: string('Component'),
  className: className(),
  onClick: func(),
  type: oneOf(
    'caption1Normal',
    'caption1Strong',
    'caption2Normal',
    'caption2Strong',
    'bodyTextNormal',
    'bodyTextStrong',
    'bodyTextTitle',
    'ingressNormal',
    'ingressStrong',
    'ingressTitle',
    'header1',
    'display1',
    'display2',
    'display3',
    'button'
  )
});
