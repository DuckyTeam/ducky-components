import {stories, string, bool, func} from '../duckyStories';

import CalculatorConsumptionQuality from './index';

stories(module, CalculatorConsumptionQuality, [
  'https://github.com/DuckyTeam/ducky-web/issues/2000'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor ofte velger du kvalitetsprodukter?"),
  onClick: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Av og til")
});
