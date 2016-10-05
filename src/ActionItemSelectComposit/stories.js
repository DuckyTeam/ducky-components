import {stories, className, string, number, func} from '../duckyStories';
import ActionItemSelectComposit from './index';

stories(module, ActionItemSelectComposit, [
  'https://github.com/DuckyTeam/ducky-web/issues/1448'
], {
  className: className(),
  co2: number(23),
  icon: string('icon-close'),
  onClick: func(),
  points: number(345),
  title: string('Aktivitet')
});
