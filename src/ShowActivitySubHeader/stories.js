import {stories, string} from '../duckyStories';
import ShowActivitySubHeader from './index';

stories(module, ShowActivitySubHeader, [
  'https://github.com/DuckyTeam/ducky-web/issues/703'
], {
  bookmarkNumber: string(),
  commentNumber: string(),
  favNumber: string(),
  shareNumber: string()
});
