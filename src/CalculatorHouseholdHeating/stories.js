import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdBuilding from './index';

stories(module, CalculatorHouseholdBuilding, [
  'https://github.com/DuckyTeam/ducky-web/issues/2038'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvilken hoved-varmekilde bruker du?"),
  onCentralHeatingSelected: func(),
  onElectricSelected: func(),
  onOilSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Elektrisk")
});
