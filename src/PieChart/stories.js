import {stories, className, string, number, json} from '../duckyStories';
import PeopleLabel from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, PeopleLabel, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  calheight: number(200),
  calwidth: number(200),
  className: className(),
  data: json({
    total: 80,
    stats: [{
      color: '#444',
      label: 'Transport',
      percentage: 15
    }, {
      color: '#FF8888',
      label: 'Food',
      percentage: 50
    }, {
      color: '#8888FF',
      label: 'Energy',
      percentage: 30
    }]
  }),
  id: string('pieChart')
});
