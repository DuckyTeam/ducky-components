import {stories, className, string, bool, func} from '../duckyStories';
import ConfirmationModal from './index';

stories(module, ConfirmationModal, [
  'https://github.com/DuckyTeam/ducky-web/issues/1009',
  'https://github.com/DuckyTeam/ducky-web/issues/1034',
  'https://github.com/DuckyTeam/ducky-web/issues/1442'
], {
  children: string('Component'),
  className: className(),
  disabled: bool(),
  onCancel: func(),
  onConfirm: func(),
  show: bool(),
  title: string('Confirm')
});
