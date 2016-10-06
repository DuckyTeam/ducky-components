import {stories, func, string} from '../duckyStories';
import PopoverMenu from './index';

stories(module, PopoverMenu, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  onClick: func(),
  text: string('Aktivitet')
});
