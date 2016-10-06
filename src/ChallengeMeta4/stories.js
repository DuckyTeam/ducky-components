import {stories, oneOf, bool, className, number, string} from '../duckyStories';
import ChallengeMeta4 from './index';

stories(module, ChallengeMeta4, [
  'https://github.com/DuckyTeam/ducky-web/issues/1659'
], {
  className: className(),
  isLeader: bool(),
  members: number(10),
  name: string('Bob'),
  theme: oneOf('dark', 'light'),
  yourTeam: bool()
});
