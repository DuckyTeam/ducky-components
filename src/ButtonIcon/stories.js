import {stories, oneOf, func, className, string, bool} from '../duckyStories';
import ButtonIcon from './index';

stories(module, ButtonIcon, [
  'https://github.com/DuckyTeam/ducky-web/issues/817'
], {
  children: string('Flat icon button'),
  className: className(),
  disabled: bool(),
  icon: string('icon-star'),
  onClick: func(),
  theme: oneOf('light', 'dark')
});
