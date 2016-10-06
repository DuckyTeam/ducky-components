import {stories, className, json, number, bool} from '../duckyStories';
import TimeStamp from './index';

stories(module, TimeStamp, [
  'https://github.com/DuckyTeam/ducky-web/issues/613'
], {
  className: className(),
  dateTime: number(1467281653000),
  onlyDays: bool(),
  short: bool(),
  style: json({})
});
