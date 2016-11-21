import {
  number,
  string,
  func,
  stories} from '../duckyStories';

import CalculatorHouseholdVehicles from './index';

stories(module, CalculatorHouseholdVehicles, [
  'https://github.com/DuckyTeam/ducky-web/issues/2047'
], {
  className: string(),
  electricValue: number(65),
  electricValueDecreased: func(),
  electricValueIncreased: func(),
  hybridValue: number(65),
  hybridValueDecreased: func(),
  hybridValueIncreased: func(),
  motorcycleValue: number(65),
  motorcycleValueDecreased: func(),
  motorcycleValueIncreased: func(),
  petrolDieselValue: number(65),
  petrolDieselValueDecreased: func(),
  petrolDieselValueIncreased: func()
});
