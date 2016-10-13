import {stories, className, string, oneOf} from '../duckyStories';
import Tooltip from './index';

stories(module, Tooltip, [
  'https://github.com/DuckyTeam/ducky-web/issues/785'
], {
  children: string('Hover me!'),
  className: className(),
  placement: oneOf('left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'),
  text: string('I am a tooltip')
});
