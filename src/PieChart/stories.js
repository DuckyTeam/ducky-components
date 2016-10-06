import {stories, className, string, number, json} from '../duckyStories';
import pieChart from './index';

stories(module, pieChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/916'
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
