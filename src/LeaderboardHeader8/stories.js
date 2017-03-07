import {stories, className, string} from '../duckyStories';
import LeaderboardHeader8 from './index';

stories(module, LeaderboardHeader8, [
  'https://github.com/DuckyTeam/ducky-web/issues/3030'
], {
  activityText: string('Aktiviteter'),
  className: className(),
  nameText: string('Navn'),
  savingText: string('Innspart kgCO2e')
});
