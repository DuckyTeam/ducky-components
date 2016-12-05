import {stories, className, func, string, bool} from '../duckyStories';
import Modal from './index';

stories(module, Modal, [
  'https://github.com/DuckyTeam/ducky-web/issues/649'
], {
  children: string('Component'),
  className: className(),
  onHide: func(),
  modalRef: func(),
  show: bool(),
  width: string('200')
});
