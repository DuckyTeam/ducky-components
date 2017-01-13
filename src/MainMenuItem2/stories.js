import {stories, className, string} from '../duckyStories';
import NotificationItem from './index';

stories(module, NotificationItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/2727'
], {
  className: className(),
  caption: string('Start hjemme-utfordringen')
});
