import {stories, string, number, className} from '../duckyStories';
import ChallengeEventCardTeamRankingChanged from './index';

stories(module, ChallengeEventCardTeamRankingChanged, [
  'https://github.com/DuckyTeam/ducky-web/issues/3042'
], {
  className: className(),
  teamName: string("The best team"),
  place: number(2),
  sinceYesterday: number(2),
  time: number(Date.now()),
  newPlacementCaption: string("Ny plassering på topplisten"),
  placementChangeCaption: string("Ditt lag er nummer 2"),
  arrowCaption: string("Opp 3 plasseringer fra i går")
});
