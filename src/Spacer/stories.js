import {stories, bool, oneOf, className} from '../duckyStories';
import Spacer from './index';

stories(module, Spacer, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  hr: bool(),
  socialMedia: oneOf('standard', 'double', 'large', 'fat', 'hr1', 'hr2', 'hr3')
});
