import {stories, number, string, oneOf} from '../duckyStories';
import StatsCarousel1 from './index';

stories(module, StatsCarousel1, [
  'https://github.com/DuckyTeam/ducky-web/issues/860'
], {
  icon: string('icon-people'),
  labelText: string('Aktive brukere'),
  statOne: number(9261),
  statTwo: number(13345),
  textOne: string('Forrige uke'),
  textTwo: string('Denne uken'),
  theme: oneOf('light', 'dark')
});
