import {stories, oneOf, func, className, string} from '../duckyStories';
import InputLarge from './index';

stories(module, InputLarge, [
  'https://github.com/DuckyTeam/ducky-web/issues/1395'
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  onBlur: func(),
  onChange: func(),
  onFocus: func(),
  placeholder: string('Holding place'),
  size: oneOf('default', 'large', 'huge'),
  value: string('Text entered into area')
});
