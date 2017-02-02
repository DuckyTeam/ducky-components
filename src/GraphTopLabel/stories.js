import {stories, string, oneOf} from '../duckyStories';
import GraphTopLabel from './index';

stories(module, GraphTopLabel, [
  'https://github.com/DuckyTeam/ducky-web/issues/2976'
], {
  caption: string(''),
  challengeType: oneOf('team', 'household', 'individual')
});
