import {stories, className, oneOf, string, bool} from '../duckyStories';
import MenuWrapper from './index';

stories(module, MenuWrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/658'
], {
  alignment: oneOf('left', 'right'),
  children: string('Component'),
  className: className(),
  show: bool()
});
