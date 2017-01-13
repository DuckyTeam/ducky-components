import {stories, className, func, oneOf, number, string, bool} from '../duckyStories';
import NotificationItem from './index';

stories(module, NotificationItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/998'
], {
  buttonClicked: bool(),
  className: className(),
  dateTime: number(1467281653000),
  icon: string('icon-clock'),
  mainIcon: string('icon-trophy'),
  name: string('Navn Navnesen'),
  onClick: func(),
  seen: bool(),
  text: string('Start Hjeme er nå tilgjengelig under Utfordringer! Blir du med?'),
  type: oneOf('default', 'challenge')
});
