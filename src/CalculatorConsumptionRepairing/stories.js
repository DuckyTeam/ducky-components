import {stories, string, bool, func} from '../duckyStories';

import CalculatorConsumptionRepairing from './index';

stories(module, CalculatorConsumptionRepairing, [
  'https://github.com/DuckyTeam/ducky-web/issues/2009'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor ofte reparerer du slitte/ødelagte ting?"),
  onAlwaysSelected: func(),
  onNeverSelected: func(),
  onOccasionallySelected: func(),
  onVeryRarelySelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Veldig sjeldent")
});
