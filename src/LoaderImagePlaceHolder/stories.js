import {stories, className, bool, oneOf, string} from '../duckyStories';
import LoaderImagePlaceHolder from './index';

stories(module, LoaderImagePlaceHolder, [
  'https://github.com/DuckyTeam/ducky-web/issues/1528'
], {
  children: string('Component'),
  className: className(),
  iconName: oneOf('icon-leaf', 'icon-duck', 'icon-photo'),
  hide: bool(),
  size: string('small')
});
