import {stories, func, string, className, number, oneOf, json} from '../duckyStories';
import CreateGoalPanel4Mobile from './index';
const iconImageImage = require('../assets/SVGIcons/social.svg');

stories(module, CreateGoalPanel4Mobile, [
  'https://github.com/DuckyTeam/ducky-web/issues/1462'
], {
  actions: json([{
    type: 'food',
    co2: 1,
    goalTitle: 'Temp1',
    points: 3,
    icon: iconImageImage
  },
  {
    type: 'social',
    co2: 1,
    goalTitle: 'Temp2',
    points: 3,
    icon: iconImageImage
  },
  {
    type: 'food',
    co2: 1,
    goalTitle: 'Temp3',
    points: 3,
    icon: iconImageImage
  },
  {
    type: 'transport',
    co2: 1,
    goalTitle: 'Temp4',
    points: 3,
    icon: iconImageImage
  }]),
  type: string('food'),
  className: className(),
  title: oneOf('Aktivitetsmål', 'Bygg en ny vane'),
  children: oneOf('Velg aktiviteten du ønsker å fokusere på for dette målet', 'Velg aktiviteten du ønsker å opprette som ny vane'),
  activeCategory: oneOf(null, 'food', 'consumption', 'energy', 'transport', 'social'),
  onCategoryClick: func(),
  onClickGoalActionItem: func(),
  goalTitle: string('Action Title'),
  co2: number(32),
  icon: oneOf(iconImageImage),
  points: number(23),
  iconSectionfooter: string('icon-keyboard_arrow_left'),
  text: string('TILBAKE')
});
