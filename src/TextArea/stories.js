import {stories, bool, oneOf, func, string, number, className} from '../duckyStories';
import TextArea from './index';

stories(module, TextArea, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  maxLength: number(150),
  onBlur: func(),
  onChange: func(),
  onClick: func(),
  onFocus: func(),
  onSubmit: func(),
  placeholder: string('Enter Text'),
  showFullText: bool(),
  textType: oneOf('bodyTextNormal'),
  value: string('')
});
