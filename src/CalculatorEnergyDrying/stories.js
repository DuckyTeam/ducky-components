import {stories, oneOf, bool, string} from '../duckyStories';
import CalculatorEnergyDrying from './index';

stories(module, CalculatorEnergyDrying, [
  'https://github.com/DuckyTeam/ducky-web/issues/2267'
], {
  children: string('Her kommer litt info om tørking av klær.'),
  checkedWashingAmount: oneOf('always', 'often', 'sometimes', 'never'),
  expanded: bool(true),
  label: string('Hvor ofte tørker du klær ute?'),
  lblDryAlways: string("Alltid"),
  lblDryOften: string("Ofte"),
  lblDrySometimes: string("Av og til"),
  lblDryNever: string("Aldri (Bruker bare tørketrommel)"),
  saveButtonText: string('LAGRE'),
  value: string('Av og til')
});
