import {stories, className, func, string, bool, json} from '../duckyStories';
import PeoplePageTabMenu from './index';

stories(module, PeoplePageTabMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/1336'
], {
  changeTab: func(),
  className: className(),
  disabled: json('[]'),
  selected: string(0)
});
