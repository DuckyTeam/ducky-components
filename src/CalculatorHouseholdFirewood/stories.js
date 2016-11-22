import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdFirewood from './index';

stories(module, CalculatorHouseholdFirewood, [
  'https://github.com/DuckyTeam/ducky-web/issues/2039'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor mye ved bruker du i løpet av et år"),
  onMoreThanFiveSelected: func(),
  onNothingSelected: func(),
  onOneToThreeSelected: func(),
  onThreeToFiveSelected: func(),
  onUptoTwelveSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Opp til 12 sekker")
});
