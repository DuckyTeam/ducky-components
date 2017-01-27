import {stories, bool, oneOf, func, string, number, className, json} from '../../duckyStories';
import ActionBubbles from './index';
const cons01 = require('./../../assets/SVGIcons/activities/activity_consumption_01.svg');


stories(module, ActionBubbles, [
], {
  className: className(),
  data: json([
    {icon: cons01, size: 3}
  ]),
  height: string('300px'),
  id: number(1)
}, 'Visualizations/ActionBubbles');
