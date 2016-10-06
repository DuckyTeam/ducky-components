import {stories, bool, string, className} from '../duckyStories';
import SnackBarWrapper from './index';

stories(module, SnackBarWrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className(),
  show: bool()
});
