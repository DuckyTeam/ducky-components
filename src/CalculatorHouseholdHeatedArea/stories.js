import {stories, string, bool, func} from '../duckyStories';

import CalculatorHouseholdHeatedArea from './index';

stories(module, CalculatorHouseholdHeatedArea, [
  'https://github.com/DuckyTeam/ducky-web/issues/2042'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor stor andel av boligen er oppvarmet?"),
  onEverythingHeatedSelected: func(),
  onLimitedSomeRoomsSelected: func(),
  onLowMostRoomsSelected: func(),
  onMostlyHeatedSelected: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Det meste er oppvarmet")
});
