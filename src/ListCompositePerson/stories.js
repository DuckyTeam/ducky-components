import {stories, className, bool, string, oneOf, number} from '../duckyStories';
import ListCompositePerson from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, ListCompositePerson, [
  'https://github.com/DuckyTeam/ducky-web/issues/774'
], {
  avatarImage: oneOf(AVATAR_URL),
  caption: string('Text'),
  className: className(),
  date: string('Aug. 2011'),
  loadingImage: bool(),
  location: string('Norway'),
  mutualNumber: number(3),
  type: oneOf('mutual', 'location', 'date', null),
  userName: string('Navn Navnesen')
});
