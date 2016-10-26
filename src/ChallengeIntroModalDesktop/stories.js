import {stories, string, className, bool, number, func} from '../duckyStories';
import ChallengeIntroModal3Desktop from './index';

stories(module, ChallengeIntroModal3Desktop, [
  'https://github.com/DuckyTeam/ducky-web/issues/1707'
], {
  children: string("Default text"),
  className: className(),
  onCancel: func(),
  show: bool(),
  icon: string(),
  isLeader: bool(),
  isYourteam: bool(),
  memberCount: number(12),
  name: string(),
  theme: string()
});
