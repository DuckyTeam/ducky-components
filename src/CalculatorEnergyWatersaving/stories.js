import {stories, oneOf, bool, string} from '../duckyStories';
import CalculatorEnergyWatersaving from './index';

stories(module, CalculatorEnergyWatersaving, [
  'https://github.com/DuckyTeam/ducky-web/issues/2264'
], {
  children: string('Her kommer litt info om energibruk fra vann og hvordan vi definerer alternativene.'),
  checkedShowerAmount: oneOf('always', 'sometimes', 'rarely', 'never'),
  expanded: bool(true),
  label: string('Hvor ofte sparer du vann utenom dusjing?'),
  lblSaveAlways: string("Alltid"),
  lblSaveSometimes: string("Som regel"),
  lblSaveRarely: string("Sjeldent"),
  lblSaveNever: string("Aldri"),
  saveButtonText: string('LAGRE'),
  value: string('Sjeldent')
});
