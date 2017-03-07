import {stories, string, oneOf, func} from '../duckyStories';
import MemberItem from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, MemberItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/3047'
], {
  avatarImage: oneOf(AVATAR_URL),
  caption: string('Text'),
  onClick: func(),
  userName: string('Navn Navnesen')
});
