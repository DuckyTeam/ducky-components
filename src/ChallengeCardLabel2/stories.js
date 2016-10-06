import {stories, string, number, className} from '../duckyStories';
import ChallengeCardLabel2 from './index';

stories(module, ChallengeCardLabel2, [
  'https://github.com/DuckyTeam/ducky-web/issues/962'
], {
  className: className(),
  memberCount: number(54),
  labelText: string('Fullført')
});
