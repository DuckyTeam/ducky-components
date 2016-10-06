import {stories, bool, oneOf, func, string, number, className} from '../duckyStories';
import TextAreaLarge from './index';

stories(module, TextAreaLarge, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  label: string('Name'),
  maxLength: number(150),
  onBlur: func(),
  onChange: func(),
  onFocus: func(),
  placeholder: string('Enter Text'),
  size: string('150'),
  value: string('')
});
