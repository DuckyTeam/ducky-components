import {stories, oneOf, bool, className, number, string} from '../duckyStories';
import ChallengeMeta7 from './index';

stories(module, ChallengeMeta7, [
  'https://github.com/DuckyTeam/ducky-web/issues/1659'
], {
  className: className(),
  icon: string('icon-leaf'),
  isLeader: bool(),
  memberCount: number(10),
  name: string('Bob'),
  theme: oneOf('light', 'dark'),
  isYourteam: bool()
});
