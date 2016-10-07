import {stories, className, func, bool, string} from '../duckyStories';
import Popup from './index';

stories(module, Popup, [
  'https://github.com/DuckyTeam/ducky-web/issues/682'
], {
  children: string('Component'),
  className: className()
});
