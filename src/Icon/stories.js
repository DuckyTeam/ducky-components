import {stories, className, string, json, func, oneOf} from '../duckyStories';
import Icon from './index';

stories(module, Icon, [
  'https://github.com/DuckyTeam/ducky-web/issues/582',
  'https://github.com/DuckyTeam/ducky-web/issues/583',
  'https://github.com/DuckyTeam/ducky-web/issues/584',
  'https://github.com/DuckyTeam/ducky-web/issues/585',
  'https://github.com/DuckyTeam/ducky-web/issues/586',
  'https://github.com/DuckyTeam/ducky-web/issues/587',
  'https://github.com/DuckyTeam/ducky-web/issues/588',
  'https://github.com/DuckyTeam/ducky-web/issues/589',
  'https://github.com/DuckyTeam/ducky-web/issues/590'
], {
  className: className(),
  icon: string('icon-duck'),
  onClick: func(),
  size: oneOf('nano', 'micro', 'mini', 'small', 'standard',
      'large1', 'large2', 'display1', 'display2'),
  style: json({color: 'blue'})
});
