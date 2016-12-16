import {stories, oneOf, string, bool} from '../duckyStories';
import CalculatorHabitEnergyElectronics from './index';

stories(module, CalculatorHabitEnergyElectronics, [
  'https://github.com/DuckyTeam/ducky-web/issues/2269'
], {
  checkedElectronics: oneOf('avoid', 'reduce', 'mindless', 'crazy'),
  energyElectronicsQuestion: string("Hvor bevisst er du på energiforbruk fra dingser?"),
  savebuttonTextElectronics: string("Tenker ikke over det"),
  expanded: bool(true),
  selectedSavetext: string("LAGRE"),
  avoidElectronicsLabel: string("Unngår elektronikk og drar alltid ut stikkkontakten"),
  crazyElectronicsLabel: string("Reduserer strømbruk og unngår å ha ting på standby"),
  mindlessElectronicsLabel: string("Tenker ikke over det"),
  reduceElectronicsLabel: string("Elsker dingser som bruker strøm!")
});
