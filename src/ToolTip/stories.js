import {stories, className, string} from '../duckyStories';
import ToolTip from './index';

stories(module, ToolTip, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className()
});
