import {stories, className, string, oneOf} from '../duckyStories';
import IconCircularFrame from './index';

stories(module, IconCircularFrame, [
  'https://github.com/DuckyTeam/ducky-web/issues/1976'
], {
  borderColor: oneOf('green'),
  bgColor: string("yellow"),
  className: className(),
  icon: string("icon-duck"),
  size: oneOf('nano', 'micro', 'mini', 'small', 'standard',
      'large1', 'large2', 'display1', 'display2')
});
