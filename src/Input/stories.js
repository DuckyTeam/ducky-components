import {stories, oneOf, func, className, string} from '../duckyStories';
import Input from './index';

stories(module, Input, [
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  onBlur: func(),
  onChange: func(),
  placeholder: string('Holding place'),
  inputType: oneOf('button')
});
