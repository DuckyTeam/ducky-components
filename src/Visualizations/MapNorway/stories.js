import {stories, bool, oneOf, func, string, number, className, json} from '../../duckyStories';
import MapNorway from './index';

stories(module, MapNorway, [
], {
  className: className(),
  height: string('240px'),
  id: number(1),
  toColor: string('#689f38'),
  fromColor: string('#dcedc8'),
  zeroColor: string('#eceff1'),
  hoverColor: string('#607D8B'),
  unit: string('delatgere'),
  values: json({
    "Aust-Agder": 4,
    "Vest-Agder": 14,
    "Oppland": 4,
    "Finnmark": 4,
    "Vestfold": 4
  })
}, 'Visualizations/MapNorway');
