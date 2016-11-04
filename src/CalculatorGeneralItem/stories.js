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
  onClick: func(),
  saveButtonText: string(),
  value: string("Gjennomsnittlig")
});
