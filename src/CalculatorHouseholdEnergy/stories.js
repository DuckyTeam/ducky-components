import {
  bool,
  number,
  string,
  func,
  stories} from '../duckyStories';

import CalculatorHouseholdEnergy from './index';

stories(module, CalculatorHouseholdEnergy, [
  'https://github.com/DuckyTeam/ducky-web/issues/2046'
], {
  className: string(),
  energyValue: number(),
  energyValueDecreased: func(),
  energyValueIncreased: func(),
  expanded: bool(),
  onSaveButtonClicked: func(),
  selected: number()
});
