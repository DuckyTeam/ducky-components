import {stories, string, bool, func, oneOf} from '../duckyStories';
import ButtonPlusminus from './index';

stories(module, ButtonPlusminus, [
  'https://github.com/DuckyTeam/ducky-web/issues/1998'
], {
  className: string(),
  icon: string(),
  inactive: bool(),
  onClick: func(),
  operator: oneOf('plus', 'remove')
});
