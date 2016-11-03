import {stories, oneOf, className} from '../duckyStories';
import AverageFootprintComparison from './index';

stories(module, AverageFootprintComparison, [
  'https://github.com/DuckyTeam/ducky-web/issues/1913'
], {
  icon: oneOf('icon-sentiment_very_satisfied', 'icon-tag_faces', 'icon-sentiment_satisfied',
          'icon-sentiment_neutral', 'icon-sentiment_dissatisfied', 'icon-mood_bad', 'icon-sentiment_very_dissatisfied'),
  className: className()
});
