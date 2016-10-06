import {stories, className, func} from '../duckyStories';
import EndOfContent from './index';

stories(module, EndOfContent, [
  'https://github.com/DuckyTeam/ducky-web/issues/1270'
], {
  className: className(),
  onClick: func()
});
