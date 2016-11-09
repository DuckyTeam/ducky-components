import {stories, className, bool, string} from '../duckyStories';
import LoaderImagePlaceHolder from './index';

stories(module, LoaderImagePlaceHolder, [
  'https://github.com/DuckyTeam/ducky-web/issues/1528'
], {
  children: string('Component'),
  className: className(),
  hide: bool(false)
});
