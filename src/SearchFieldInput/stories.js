import {stories, className, bool, string, func} from '../duckyStories';
import SearchFieldInput from './index';

stories(module, SearchFieldInput, [
  'https://github.com/DuckyTeam/ducky-web/issues/780'
], {
  children: string('Component'),
  className: className(),
  onClear: func(),
  onSearchSubmit: func(),
  startEdit: bool()
});
