import {stories, string, number, className} from '../duckyStories';
import CardLabel2 from './index';

stories(module, CardLabel2, [
  'https://github.com/DuckyTeam/ducky-web/issues/962'
], {
  className: className(),
  memberCount: number(54),
  labelText: string('Fullført')
});
