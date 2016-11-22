import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdHeatPump from './index';

stories(module, CalculatorHouseholdHeatPump, [
  'https://github.com/DuckyTeam/ducky-web/issues/2043'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Har du varmepumpe?"),
  onAirToAirSelected: func(),
  onAirToWaterSelected: func(),
  onLiquidWaterSelected: func(),
  onNoSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Ingen")
});
