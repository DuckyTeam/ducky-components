import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdShower from './index';

stories(module, CalculatorHouseholdShower, [
  'https://github.com/DuckyTeam/ducky-web/issues/2044'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvilken type dusj har du?"),
  onDontKnowSelected: func(),
  onRegularSelected: func(),
  onSavingSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Vet ikke")
});
