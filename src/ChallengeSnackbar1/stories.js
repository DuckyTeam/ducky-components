import {stories, oneOf, string, bool} from '../duckyStories';
import ChallengeSnackbar1 from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, ChallengeSnackbar1, [
  'https://github.com/DuckyTeam/ducky-web/issues/3058'
], {
  avatarImage: oneOf(AVATAR_URL),
  className: string(),
  isLoadingAvatar: bool(),
  text: string('Someone joined your team, woop woop!')
});
