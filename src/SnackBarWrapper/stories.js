import {stories, json, className, func} from '../duckyStories';
import SnackBarWrapper from './index';

stories(module, SnackBarWrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/652'
], {
  className: className(),
  messages: json([{
    message: 'Message',
    type: 'message',
    date: Date.now()
  }, {
    message: 'Message number 2',
    type: 'message',
    date: Date.now()
  }]),
  onDismiss: func()
});
