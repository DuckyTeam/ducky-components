import {stories, oneOf, func, className, string} from '../duckyStories';
import TextInputRegular from './index';

stories(module, TextInputRegular, [
  'https://github.com/DuckyTeam/ducky-web/issues/1395'
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  onBlur: func(),
  onChange: func(),
  onFocus: func(),
  label: string('Label'),
  placeholder: string('placeholder'),
  value: string('Text entered into area')
});
