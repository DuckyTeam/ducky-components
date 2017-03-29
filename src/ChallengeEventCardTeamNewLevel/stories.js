import {stories, string, number, className} from '../duckyStories';
import ChallengeEventCardTeamNewLevel from './index';

stories(module, ChallengeEventCardTeamNewLevel, [
  'https://github.com/DuckyTeam/ducky-web/issues/3043'
], {
  className: className(),
  teamName: string("The best team"),
  co2: number(500),
  time: number(Date.now()),
  imageSrc: string("https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/fsm.svg"),
  caption: string("Ditt lag har nå spart mer enn 500kg CO2"),
  explanation: string("Dette tilsvarer omtrent samme mengde som 6000 trær absorberer på ett år.")
});
