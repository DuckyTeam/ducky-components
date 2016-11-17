import {stories, oneOf, func, className, string} from '../duckyStories';
import Input from './index';

stories(module, Input, [
  'https://github.com/DuckyTeam/ducky-web/issues/1380'
], {
  className: className(),
  errorMessage: oneOf(null, 'Error'),
  name: string('Used to get browsers to store credentials'),
  onBlur: func(),
  onChange: func(),
  placeholder: string('Holding place'),
  inputType: oneOf('button')
});
