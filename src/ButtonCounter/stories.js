import {stories, func, className, string, oneOf} from '../duckyStories';
import ButtonCounter from './index';

stories(module, ButtonCounter, [
  'https://github.com/DuckyTeam/ducky-web/issues/627',
  'https://github.com/DuckyTeam/ducky-web/issues/628'
], {
  className: className(),
  // number is string for multipurpose
  number: string(54),
  onClick: func(),
  prefix: string(''),
  size: oneOf('small', 'standard')
});
