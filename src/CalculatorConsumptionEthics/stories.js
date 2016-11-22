import {stories, string, bool, func} from '../duckyStories';

import CalculatorConsumptionRepairing from './index';

stories(module, CalculatorConsumptionRepairing, [
  'https://github.com/DuckyTeam/ducky-web/issues/2010'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor ofte velger du etisk og miljøvennlig?"),
  onClick: func(),
  onSaveButtonClicked: func(),
  saveButtonText: string(),
  selected: string("Av og til")
});
