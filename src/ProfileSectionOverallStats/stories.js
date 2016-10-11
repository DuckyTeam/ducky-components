import {stories, className, bool, oneOf, number} from '../duckyStories';
import ProfileSectionOverallStats from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, ProfileSectionOverallStats, [
  'https://github.com/DuckyTeam/ducky-web/issues/1422',
  'https://github.com/DuckyTeam/ducky-web/issues/1423'
], {
  activities: number(1),
  className: className(),
  co2: number(2),
  comparisonActivities: number(3),
  comparisonAvatarUrl: oneOf(AVATAR_URL),
  comparisonCo2: number(4),
  comparisonPoints: number(5),
  ownAvatarUrl: oneOf('http://www.pescuitinfo.ro/media/avat_1794.jpg'),
  points: number(6),
  toBeCompared: bool()
});
