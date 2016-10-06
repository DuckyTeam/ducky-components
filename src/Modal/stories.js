import {stories, className, func, string, bool} from '../duckyStories';
import Modal from './index';

stories(module, Modal, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  children: string('Component'),
  className: className(),
  fullSize: bool(),
  onHide: func(),
  show: bool(),
  width: string('200')
});
