import {stories, className, string, func, oneOf} from '../duckyStories';
import Typography from './index';

stories(module, Typography, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
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
