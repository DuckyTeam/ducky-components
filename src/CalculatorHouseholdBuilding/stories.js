import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdBuilding from './index';

stories(module, CalculatorHouseholdBuilding, [
  'https://github.com/DuckyTeam/ducky-web/issues/2037'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Når ble boligen din bygd eller renovert?"),
  onAfter2010Selected: func(),
  onBefore1980Selected: func(),
  onDuring00Selected: func(),
  onDuring80Selected: func(),
  onDuring90Selected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("På 80-tallet")
});
