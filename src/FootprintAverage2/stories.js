import {stories, className, string, func, oneOf, json} from '../duckyStories';
import FootprintAverage2 from './index';

stories(module, FootprintAverage2, [
  'https://github.com/DuckyTeam/ducky-web/issues/2476'
], {
  text: string('Ditt årlige fotavtrykk er'),
  icon: oneOf('icon-sentiment_very_satisfied', 'icon-tag_faces', 'icon-sentiment_satisfied',
          'icon-sentiment_neutral', 'icon-sentiment_dissatisfied', 'icon-mood_bad', 'icon-sentiment_very_dissatisfied')
});
