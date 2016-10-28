import {stories, string, number, className, bool, func} from '../duckyStories';
import ChallengeMetaJoin from './index';

stories(module, ChallengeMetaJoin, [
  'https://github.com/DuckyTeam/ducky-web/issues/892'
], {
  className: className(),
  disabled: bool(),
  endDate: number(1477401110598),
  joined: bool(),
  noAccess: bool(true),
  onClick: func(),
  onNotificationsClick: func(),
  startDate: number(1475241124937)
});
