import {stories, className, string, func, oneOf, bool, json} from '../duckyStories';
import Wrapper from './index';

stories(module, Wrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className(),
  onClick: func(),
  size: oneOf('standard', 'side-bottom', 'side', 'narrow', 'slim',
    'short', 'midget', 'squat', 'slender'),
  style: json({backgroundColor: 'grey'})
});
