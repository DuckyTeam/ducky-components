import {stories, oneOf, func, className, string, bool} from '../duckyStories';
import Button from './index';

stories(module, Button, [
  'https://github.com/DuckyTeam/ducky-web/issues/677'
], {
  children: string('Flat button'),
  className: className(),
  disabled: bool(),
  onClick: func(),
  theme: oneOf('light', 'dark'),
  type: oneOf('button', 'reset', 'submit')
});
