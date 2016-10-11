import {bool, stories, oneOf, func, string, number, className} from '../duckyStories';
import PersonItem1 from './index';

stories(module, PersonItem1, [
  'https://github.com/DuckyTeam/ducky-web/issues/1332'
], {

  avatarImage: string("http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg"),
  className: className(),
  mutualNumber: number(10),
  onClick: func(),
  userName: string(),
  iconClicked: bool(false)
})
