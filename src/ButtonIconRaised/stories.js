import {stories, oneOf, func, className, string, bool} from '../duckyStories';
import ButtonIconRaised from './index';

stories(module, ButtonIconRaised, [
  'https://github.com/DuckyTeam/ducky-web/issues/818'
], {
  children: string('Raised icon button'),
  className: className(),
  disabled: bool(),
  icon: string('icon-duck'),
  onClick: func(),
  theme: oneOf('light', 'dark')
});
