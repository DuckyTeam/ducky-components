import {stories, className, func, oneOf, number, string, bool} from '../duckyStories';
import NotificationItem from './index';

stories(module, NotificationItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/667'
], {
  children: string('Component'),
  className: className(),
  dateTime: number(1467281653000),
  icon: string('icon-textsms'),
  name: string('Navn Navnesen'),
  onClick: func(),
  seen: bool(),
  text: string('kommenterte innlegget ditt'),
  type: oneOf('default', 'challenge')
});
