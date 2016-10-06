import {stories, className, func, bool, string} from '../duckyStories';
import Popup from './index';

stories(module, Popup, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className()
});
