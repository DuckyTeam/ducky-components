import {stories, className, string} from '../duckyStories';
import ToolTip from './index';

stories(module, ToolTip, [
  'https://github.com/DuckyTeam/ducky-web/issues/785'
], {
  children: string('Component'),
  className: className()
});
