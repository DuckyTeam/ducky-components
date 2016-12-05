import {stories, className, func, string, bool} from '../duckyStories';
import ModalFullsize from './index';

stories(module, ModalFullsize, [
  'https://github.com/DuckyTeam/ducky-web/issues/649'
], {
  cancelButtonText: string('Cancel'),
  children: string('Component'),
  className: className(),
  okButtonText: string('Submit'),
  onCancel: func(),
  onHide: func(),
  onOkClick: func(),
  ref: func(),
  show: bool(),
  showStickyFooter: bool()
});
