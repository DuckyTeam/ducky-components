import {stories, className, func, string, bool} from '../duckyStories';
import EmailTag from './index';

stories(module, EmailTag, [
  'https://github.com/DuckyTeam/ducky-web/issues/2030'
], {
  children: string('tommy.ostgaard@gmail.com'),
  className: className(),
  invalid: bool(false),
  onClick: func()
});
