import {stories, className, string, func} from '../duckyStories';
import ListCompositeSugClose from './index';

stories(module, ListCompositeSugClose, [
  'https://github.com/DuckyTeam/ducky-web/issues/778',
  'https://github.com/DuckyTeam/ducky-web/issues/779'
], {
  children: string('Component'),
  className: className(),
  onCloseClick: func()
});
