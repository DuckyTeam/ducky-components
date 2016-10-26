import {stories, func, string, className, number, oneOf} from '../duckyStories';
import CreateGoalPanel4Mobile from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, CreateGoalPanel4Mobile, [
  'https://github.com/DuckyTeam/ducky-web/issues/1462'
], {
  className: className(),
  title: oneOf('Aktivitetsmål', 'Bygg en ny vane'),
  children: oneOf('Velg aktiviteten du ønsker å fokusere på for dette målet', 'Velg aktiviteten du ønsker å opprette som ny vane'),
  activeCategory: oneOf('', 'food', 'consumption', 'energy', 'transport', 'social'),
  onCategoryClick: func(),
  onClickGoalActionItem: func(),
  titleGoal1: string('Action Title'),
  titleGoal2: string('Action Title longer'),
  titleGoal3: string('Action Title longest'),
  co2: number(32),
  icon: oneOf(iconImageImage),
  points: number(23),
  iconSectionfooter: string('icon-keyboard_arrow_left'),
  text: string('TILBAKE')
});
