import {stories, className, oneOf} from '../duckyStories';
import CreateGoalValueInput from './index';

stories(module, CreateGoalValueInput, [
  'https://github.com/DuckyTeam/ducky-web/issues/1460'
], {
  className: className(),
  type: oneOf('points', 'activity', 'co2')
});
