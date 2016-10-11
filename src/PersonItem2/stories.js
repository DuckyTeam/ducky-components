import {bool, stories, oneOf, func, string, number, className} from '../duckyStories';
import PersonItem2 from './index';


stories(module, PersonItem2, [
  'https://github.com/DuckyTeam/ducky-web/issues/1333'
], {

  avatarImage: string("http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg"),
  className: className(),
  mutualNumber: number(),
  onClick: func(),
  userName: string(),
  iconClicked: bool()
})
