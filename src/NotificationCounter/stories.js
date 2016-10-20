import {stories, className, func, oneOf, number, string, bool} from '../duckyStories';
import NotificationItem from './index';

stories(module, NotificationItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/667'
], {
  number: number('44')
});
