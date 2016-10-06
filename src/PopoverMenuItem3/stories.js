import {stories, className, func, bool, string} from '../duckyStories';
import PopoverMenuItem3 from './index';

stories(module, PopoverMenuItem3, [
  'https://github.com/DuckyTeam/ducky-web/issues/1015'
], {
  className: className(),
  label: string('Menu Label'),
  onClick: func(),
  selected: bool()
});
