import {stories, className, string, func, oneOf, json} from '../duckyStories';
import Wrapper from './index';

stories(module, Wrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/632',
  'https://github.com/DuckyTeam/ducky-web/issues/633',
  'https://github.com/DuckyTeam/ducky-web/issues/634',
  'https://github.com/DuckyTeam/ducky-web/issues/636',
  'https://github.com/DuckyTeam/ducky-web/issues/642',
  'https://github.com/DuckyTeam/ducky-web/issues/650',
  'https://github.com/DuckyTeam/ducky-web/issues/766',
  'https://github.com/DuckyTeam/ducky-web/issues/911',
  'https://github.com/DuckyTeam/ducky-web/issues/1290'
], {
  children: string('Component'),
  className: className(),
  onClick: func(),
  size: oneOf('standard', 'side-bottom', 'side', 'narrow', 'slim',
    'short', 'midget', 'squat', 'slender', 'large', 'large-no-top'),
  style: json({backgroundColor: 'grey'})
});
