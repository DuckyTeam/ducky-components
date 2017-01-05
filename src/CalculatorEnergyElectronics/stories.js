import {stories, oneOf, bool, string} from '../duckyStories';
import CalculatorEnergyElectronics from './index';

stories(module, CalculatorEnergyElectronics, [
  'https://github.com/DuckyTeam/ducky-web/issues/2269'
], {
  children: string('Her kommer litt info om energibruk fra dingser.'),
  checkedWashingAmount: oneOf('always', 'often', 'sometimes', 'never'),
  expanded: bool(true),
  label: string('Hvor bevisst er du på energibruk fra dingser?'),
  lblSaveAlways: string("Unngår elektronikk"),
  lblSaveOften: string("Reduserer strømbruk"),
  lblSaveMindless: string("Tenker ikke over"),
  lblSaveNever: string("Elsker dingser!"),
  saveButtonText: string('LAGRE'),
  value: string('Tenker ikke over')
});
