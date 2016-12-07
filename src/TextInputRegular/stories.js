import {stories, oneOf, func, number, className, string} from '../duckyStories';
import TextInputRegular from './index';

stories(module, TextInputRegular, [
  'https://github.com/DuckyTeam/ducky-web/issues/2113'
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  maxLength: number(140),
  onBlur: func(),
  onChange: func(),
  onFocus: func(),
  label: string('Label'),
  value: string('Text entered into area')
});
