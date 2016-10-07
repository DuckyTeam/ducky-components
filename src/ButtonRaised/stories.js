import {stories, oneOf, func, className, string, bool} from '../duckyStories';
import ButtonRaised from './index';

stories(module, ButtonRaised, [
  'https://github.com/DuckyTeam/ducky-web/issues/678'
], {
  children: string('Raised button'),
  className: className(),
  disabled: bool(),
  onClick: func(),
  theme: oneOf('light', 'dark'),
  type: oneOf('button', 'reset', 'submit')
});
