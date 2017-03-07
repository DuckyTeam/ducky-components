import {stories, className, string, oneOf, func} from '../duckyStories';
import IconAvaWrapper from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, IconAvaWrapper, [
  'https://github.com/DuckyTeam/ducky-web/issues/641',
  'https://github.com/DuckyTeam/ducky-web/issues/3035'
], {
  avatar: oneOf(AVATAR_URL, null),
  className: className(),
  icon: string('icon-duck'),
  onClick: func(),
  size: oneOf('small', null)
});
