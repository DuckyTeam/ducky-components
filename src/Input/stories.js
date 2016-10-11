import {stories, oneOf, func, className, string} from '../duckyStories';
import Input from './index';

stories(module, Input, [
  'https://github.com/DuckyTeam/ducky-web/issues/1380'
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  onBlur: func(),
  onChange: func(),
  placeholder: string('Holding place'),
  inputType: oneOf('button')
});
