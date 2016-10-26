import {stories, string, className, bool, number, func} from '../duckyStories';
import ChallengeIntroModal3 from './index';

stories(module, ChallengeIntroModal3, [
  'https://github.com/DuckyTeam/ducky-web/issues/1707'
], {
  children: string("Default text"),
  className: className(),
  onCancel: func(),
  show: bool(),
  icon: string("icon-leaf"),
  img: string("http://www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg"),
  isLeader: bool(),
  isYourteam: bool(),
  memberCount: number(12),
  name: string("Ducky Duck"),
  theme: string()
});
