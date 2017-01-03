import {
  number,
  string,
  bool,
  stories} from '../duckyStories';

import CalculatorHouseholdEnergyShower from './index';

stories(module, CalculatorHouseholdEnergyShower, [
  'https://github.com/DuckyTeam/ducky-web/issues/2261'
], {
  energyshowerQuestion: string("Omtrent hvor mye dusjer du?"),
  numberShowerText: string("Antall per uke"),
  numberShowerValue: number(7),
  durationShowerText: string("Lengde per dusj"),
  durationShowerValue: string("7-9 min"),
  icon: string("icon-info_outline"),
  toggledInfo: bool(true),
  showerInfotext: string("Gjennomsnittsnordmannen dusjer 7 ganger i uka og bruker ca 8. minutter per dusj.")
});
