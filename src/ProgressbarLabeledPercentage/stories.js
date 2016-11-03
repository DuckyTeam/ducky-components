import {stories, string, className, number} from '../duckyStories';
import ProgressbarLabeledPercentage from './index';

stories(module, ProgressbarLabeledPercentage, [
  'https://github.com/DuckyTeam/ducky-web/issues/1936'
], {
  categoryText: string("Matvarekategori"),
  className: className(),
  color: string('red'),
  percent: number(25),
  scaledPercent: number(10)
});
