import {stories, className} from '../duckyStories';
import BackgroundLoader from './index';

stories(module, BackgroundLoader, [
  'https://github.com/DuckyTeam/ducky-web/issues/2655'
], {
  className: className()
});
