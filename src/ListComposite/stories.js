import {stories, className, string, bool, number} from '../duckyStories';
import ListComposite from './index';

stories(module, ListComposite, [
  'https://github.com/DuckyTeam/ducky-web/issues/775',
  'https://github.com/DuckyTeam/ducky-web/issues/777'
], {
  challenge: bool(),
  challengeName: string('Utfordringer navn'),
  className: className(),
  info: number(123)
});
