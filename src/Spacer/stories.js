import {stories, bool, oneOf, className} from '../duckyStories';
import Spacer from './index';

stories(module, Spacer, [
  'https://github.com/DuckyTeam/ducky-web/issues/629',
  'https://github.com/DuckyTeam/ducky-web/issues/630',
  'https://github.com/DuckyTeam/ducky-web/issues/631',
  'https://github.com/DuckyTeam/ducky-web/issues/639',
  'https://github.com/DuckyTeam/ducky-web/issues/1288',
  'https://github.com/DuckyTeam/ducky-web/issues/1291',
  'https://github.com/DuckyTeam/ducky-web/issues/1359'
], {
  className: className(),
  hr: bool(),
  socialMedia: oneOf('standard', 'double', 'large', 'fat', 'hr1', 'hr2', 'hr3')
});
