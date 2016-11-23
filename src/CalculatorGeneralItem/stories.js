import {stories, string, bool, func} from '../duckyStories';
import CalculatorGeneralItem from './index';

stories(module, CalculatorGeneralItem, [
  'https://github.com/DuckyTeam/ducky-web/issues/1953'
], {
  children: string(),
  className: string(),
  expanded: bool(),
  inactive: bool(),
  label: string("Hvor mye spiser du?"),
  onAlwaysSelected: func(),
  onOccasionallySelected: func(),
  onOftenSelected: func(),
  onRarelySelected: func(),
  saveButtonText: string('Lagre'),
  units: string(''),
  value: string("Gjennomsnittlig")
});
