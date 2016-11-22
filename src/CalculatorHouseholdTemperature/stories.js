import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdTemperature from './index';

stories(module, CalculatorHouseholdTemperature, [
  'https://github.com/DuckyTeam/ducky-web/issues/2040'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor mye ved bruker du i løpet av et år"),
  onEighteenOrLessSelected: func(),
  onNineteenToTwentyOneSelected: func(),
  onTwentyOneToTwentyThreeSelected: func(),
  onTwentyThreeToTwentyFiveSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("21-23°C")
});
