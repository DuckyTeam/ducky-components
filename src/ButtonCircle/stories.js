import {stories, className, string} from '../duckyStories';
import ButtonCircle from './index';

stories(module, ButtonCircle, [
  'https://github.com/DuckyTeam/ducky-web/issues/1270'
], {
  children: string('Vis mer'),
  className: className()
});
