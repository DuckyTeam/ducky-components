import {stories, className, json} from '../duckyStories';
import PeopleLabel from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, PeopleLabel, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  people: json([AVATAR_URL, AVATAR_URL, AVATAR_URL, AVATAR_URL])
});
