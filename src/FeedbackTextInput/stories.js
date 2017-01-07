import {stories, className, func} from '../duckyStories';
import FeedbackTextInput from './index';

stories(module, FeedbackTextInput, [
  'https://github.com/DuckyTeam/ducky-web/issues/651'
], {
  className: className(),
  onClick: func()
});
