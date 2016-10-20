import {bool, stories, func, string, className} from '../duckyStories';
import CreateGoalPanel1Desktop from './index';

stories(module, CreateGoalPanel1Desktop, [
  'https://github.com/DuckyTeam/ducky-web/issues/1469'
], {
  className: className(),
  children: string('Bygg en vane eller fullfør prestasjoner iløpet av en fastsatt periode.'),
  title: string('Sett nytt personlig mål'),
  onClick: func(),
  inactive: bool(),
  onCancel: func(),
  show: bool('false'),
  text: string('AVBRYT')
});
