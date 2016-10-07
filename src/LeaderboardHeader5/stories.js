import {stories, className, bool} from '../duckyStories';
import LeaderboardHeader5 from './index';

stories(module, LeaderboardHeader5, [
  'https://github.com/DuckyTeam/ducky-web/issues/1675'
], {
  className: className(),
  household: bool()
});
