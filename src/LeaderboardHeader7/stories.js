import {stories, className, string} from '../duckyStories';
import LeaderboardHeader7 from './index';

stories(module, LeaderboardHeader7, [
  'https://github.com/DuckyTeam/ducky-web/issues/3027'
], {
  className: className(),
  nameText: string('Navn'),
  savingText: string('Innspart kgCO2e')
});
