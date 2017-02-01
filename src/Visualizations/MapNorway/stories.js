import {stories, bool, oneOf, func, string, number, className, json} from '../../duckyStories';
import MapNorway from './index';

stories(module, MapNorway, [
], {
  className: className(),
  height: string('300px'),
  id: number(1),
  toColor: string('#061539'),
  fromColor: string('#4F628E'),
  values: json({
    "Aust-Agder": 4,
    "Vest-Agder": 14,
    "Oppland": 4,
    "Finnmark": 4,
    "Vestfold": 4
  })
}, 'Visualizations/MapNorway');
