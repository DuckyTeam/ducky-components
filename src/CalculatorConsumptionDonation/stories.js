import {
  number,
  string,
  func,
  stories} from '../duckyStories';

import CalculatorConsumptionDonation from './index';

stories(module, CalculatorConsumptionDonation, [
  'https://github.com/DuckyTeam/ducky-web/issues/1993'
], {
  className: string(),
  donationValue: number(65),
  donationValueDecreased: func(),
  donationValueIncreased: func()
});
