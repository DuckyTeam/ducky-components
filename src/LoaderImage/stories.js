import {stories, className, bool, oneOf} from '../duckyStories';
import LoaderImage from './index';

stories(module, LoaderImage, [
  'https://github.com/DuckyTeam/ducky-web/issues/1527'
], {
  iconName: oneOf('icon-leaf', 'icon-duck', 'icon-photo'),
  className: className(),
  hide: bool(false)
});
