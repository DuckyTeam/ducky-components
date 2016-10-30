import {stories, bool, func, className, string} from '../duckyStories';
import ButtonLoadMore from './index';

stories(module, ButtonLoadMore, [
  'https://github.com/DuckyTeam/ducky-web/issues/1270'
], {
  onClick: func(),
  children: string('Vis mer'),
  className: className(),
  endOfContent: bool()
});
