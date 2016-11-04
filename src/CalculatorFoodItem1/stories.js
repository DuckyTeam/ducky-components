import {stories, className, oneOf, string, bool} from '../duckyStories';
import CalculatorFoodItem1 from './index';

stories(module, CalculatorFoodItem1, [
  'https://github.com/DuckyTeam/ducky-web/issues/1949'
], {
  children: string("Her kommer litt informasjon om porsjonsstørrelse."),
  className: className(),
  checkedEatAmount: oneOf('little', 'woman', 'avg', 'man', 'horse'),
  lblEatAverage: string("Gjenomsnittlig"),
  lblEatLikeHorse: string("Som en hest"),
  lblEatTypicalWoman: string("Typisk kvinne"),
  lblEatLittle: string("Spiser lite"),
  lblEatTypicalMan: string("Typisk mann")
});
