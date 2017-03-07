import {stories, className, string, func, number, json, oneOf} from '../duckyStories';
import LeaderboardLabelSet2 from './index';

stories(module, LeaderboardLabelSet2, [
  'https://github.com/DuckyTeam/ducky-web/issues/903'
], {
  className: className(),
  icon: string('icon-star'),
  name: string('Deg'),
  progressColor: string('#00ab97'),
  percent: number(25),
  points: number(50)
});
