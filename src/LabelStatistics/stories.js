import {stories, className, oneOf, string} from '../duckyStories';
import LabelStatistics from './index';

stories(module, LabelStatistics, [
  'https://github.com/DuckyTeam/ducky-web/issues/848'
], {
  className: className(),
  statistics: string('99.9'),
  textcontent: string('I år'),
  theme: oneOf('light', 'dark')
});
