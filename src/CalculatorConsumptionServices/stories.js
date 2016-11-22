import {stories, string, bool, func} from '../duckyStories';

import CalculatorConsumptionServices from './index';

stories(module, CalculatorConsumptionServices, [
  'https://github.com/DuckyTeam/ducky-web/issues/2016'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor ofte velger du etisk og miljøvennlig?"),
  onSaveButtonClicked: func(),
  onAlwaysSelected: func(),
  onDontKnowSelected: func(),
  onLoveTobuySelected: func(),
  onPreferSelected: func(),
  saveButtonText: string(),
  selected: string("Vet ikke")
});
