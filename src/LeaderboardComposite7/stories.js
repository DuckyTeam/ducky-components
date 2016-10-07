import {stories, className, func, number, bool, string} from '../duckyStories';
import LabelTitle from './index';

stories(module, LabelTitle, [
  'https://github.com/DuckyTeam/ducky-web/issues/1676'
], {
  className: className(),
  isLeader: bool(),
  onClick: func(),
  opened: bool(),
  teamMemberCount: number(20),
  teamName: string('Taco Friday'),
  teamRanking: number(1),
  teamTotalCo2: number(50),
  yourTeam: bool()
});
