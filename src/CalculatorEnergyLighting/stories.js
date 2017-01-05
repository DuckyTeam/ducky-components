import {stories, oneOf, bool, string} from '../duckyStories';
import CalculatorEnergyLighting from './index';

stories(module, CalculatorEnergyLighting, [
  'https://github.com/DuckyTeam/ducky-web/issues/2268'
], {
  children: string('Her kommer litt info om energibruk fra lys og hvordan vi definerer alternativene.'),
  checkedWashingAmount: oneOf('always', 'often', 'rarely', 'never'),
  expanded: bool(true),
  label: string('Hvor ofte skrur du av lys du ikke bruker?'),
  lblSaveAlways: string("Alltid"),
  lblSaveOften: string("Som regel"),
  lblSaveRarely: string("Sjeldent"),
  lblSaveNever: string("Aldri"),
  saveButtonText: string('LAGRE'),
  value: string('Sjeldent')
});
