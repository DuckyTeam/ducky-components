import {stories, oneOf, bool, string} from '../duckyStories';
import CalculatorEnergyWashing from './index';

stories(module, CalculatorEnergyWashing, [
  'https://github.com/DuckyTeam/ducky-web/issues/2266'
], {
  children: string('Her kommer litt info om vasking, oppvask og hvordan vi definerer alternativene.'),
  checkedWashingAmount: oneOf('always', 'often', 'mindless', 'halffull'),
  expanded: bool(true),
  label: string('Hvordan vasker du klær og oppvask?'),
  lblSaveAlways: string("Fyller alltid opp maskinene"),
  lblSaveOften: string("Fyller ofte opp"),
  lblSaveMindless: string("Tenker ikke over"),
  lblSaveHalf: string("Kjører halvfulle"),
  saveButtonText: string('LAGRE'),
  value: string('Tenker ikke over')
});
