import {stories, string, className, bool, func} from '../duckyStories';
import SnackBarWrapper from './index';

stories(module, SnackBarWrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/652'
], {
  children: string(),
  className: className(),
  show: bool()
});
