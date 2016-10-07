import {stories, number} from '../duckyStories';
import ChallengeMeta5 from './index';

stories(module, ChallengeMeta5, [
  'https://github.com/DuckyTeam/ducky-web/issues/1660'
], {
  goal: number(10),
  level: number(23),
  progress: number(50)
});
