import {stories, bool, oneOf, func, className, string} from '../duckyStories';
import ButtonMini from './index';

stories(module, ButtonMini, [
  'https://github.com/DuckyTeam/ducky-web/issues/1327'
], {
  className: className(),
  disabled: bool(),
  icon: string('icon-tram'),
  onClick: func(),
  theme: oneOf('border', 'fill')
});
