import {stories, string, className, oneOf} from '../duckyStories';
import LabelNumberDisplay1 from './index';

stories(module, LabelNumberDisplay1, [
  'https://github.com/DuckyTeam/ducky-web/issues/1928'
], {
  number: string("1200.0"),
  caption: string("kg CO2e"),
  className: className(),
  icon: string("icon-leaf"),
  theme: oneOf('light', 'dark')
});
