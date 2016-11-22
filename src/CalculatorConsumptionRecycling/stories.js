import {stories, string, bool, func} from '../duckyStories';

import CalculatorConsumptionRecycling from './index';

stories(module, CalculatorConsumptionRecycling, [
  'https://github.com/DuckyTeam/ducky-web/issues/2017'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Resirkulerer du mye av avfallet ditt?"),
  onSaveButtonClicked: func(),
  onAlwaysSelected: func(),
  onMostlySelected: func(),
  onNotGoodSelected: func(),
  onWherePracticable: func(),
  saveButtonText: string(),
  selected: string("Det meste resirkuleres")
});
