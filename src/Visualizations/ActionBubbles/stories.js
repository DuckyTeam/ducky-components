import {stories, bool, oneOf, func, string, number, className, json} from '../../duckyStories';
import ActionBubbles from './index';

const cons01 = require('./../../assets/SVGIcons/activities/activity_consumption_01.svg');
const cons02 = require('./../../assets/SVGIcons/activities/activity_consumption_02.svg');
const cons03 = require('./../../assets/SVGIcons/activities/activity_consumption_03.svg');
const cons04 = require('./../../assets/SVGIcons/activities/activity_consumption_04.svg');
const cons05 = require('./../../assets/SVGIcons/activities/activity_consumption_05.svg');
const cons06 = require('./../../assets/SVGIcons/activities/activity_consumption_06.svg');
const cons07 = require('./../../assets/SVGIcons/activities/activity_consumption_07.svg');
const cons08 = require('./../../assets/SVGIcons/activities/activity_consumption_08.svg');
const cons09 = require('./../../assets/SVGIcons/activities/activity_consumption_09.svg');
const cons10 = require('./../../assets/SVGIcons/activities/activity_consumption_10.svg');
const cons11 = require('./../../assets/SVGIcons/activities/activity_consumption_11.svg');
const cons12 = require('./../../assets/SVGIcons/activities/activity_consumption_12.svg');
const cons13 = require('./../../assets/SVGIcons/activities/activity_consumption_13.svg');


stories(module, ActionBubbles, [
], {
  className: className(),
  data: json([
    {icon: cons01, size: 3},
    {icon: cons02, size: 13},
    {icon: cons03, size: 20},
    {icon: cons04, size: 2},
    {icon: cons05, size: 8},
    {icon: cons06, size: 4},
    {icon: cons07, size: 2},
    {icon: cons08, size: 3},
    {icon: cons09, size: 1},
    {icon: cons10, size: 3},
    {icon: cons11, size: 6},
    {icon: cons12, size: 3},
    {icon: cons13, size: 2}
  ]),
  height: string('300px'),
  id: number(1)
}, 'Visualizations/ActionBubbles');
