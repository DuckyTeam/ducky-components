import {stories, bool, json, oneOf, func, className} from '../duckyStories';
import Avatar from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, Avatar, [
  'https://github.com/DuckyTeam/ducky-web/issues/591',
  'https://github.com/DuckyTeam/ducky-web/issues/592',
  'https://github.com/DuckyTeam/ducky-web/issues/593',
  'https://github.com/DuckyTeam/ducky-web/issues/594',
  'https://github.com/DuckyTeam/ducky-web/issues/595'
], {
  className: className(),
  image: oneOf(AVATAR_URL),
  isLoading: bool(),
  onClick: func(),
  size: oneOf('small', 'standard', 'large', 'display1', 'display2'),
  style: json()
});
