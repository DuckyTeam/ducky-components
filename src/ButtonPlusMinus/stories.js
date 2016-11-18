import {stories, className, bool, func, oneOf} from '../duckyStories';
import ButtonPlusMinus from './index';

stories(module, ButtonPlusMinus, [
  'https://github.com/DuckyTeam/ducky-web/issues/1998'
], {
  className: className(),
  inactive: bool(false),
  onClick: func(),
  operator: oneOf('plus', 'remove')
});
