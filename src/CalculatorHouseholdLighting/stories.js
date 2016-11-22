import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdLighting from './index';

stories(module, CalculatorHouseholdLighting, [
  'https://github.com/DuckyTeam/ducky-web/issues/2045'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvilken type belysning har du"),
  onIncandescentHalogenSelected: func(),
  onMostlyLEDSelected: func(),
  onSomeLEDSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Noe LED-belysning")
});
