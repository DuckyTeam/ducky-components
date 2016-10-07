import {stories, className, bool, string, func} from '../duckyStories';
import SnackBarPanel1 from './index';

stories(module, SnackBarPanel1, [
  'https://github.com/DuckyTeam/ducky-web/issues/679'
], {
  button: bool(),
  className: className(),
  onClick: func(),
  text: string('New Item')
});
