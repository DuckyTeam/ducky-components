import {stories, oneOf, func, className, string, bool} from '../duckyStories';
import CalculatorFoodItem1 from './index';

stories(module, CalculatorFoodItem1, [
  'https://github.com/DuckyTeam/ducky-web/issues/1949'
], {
  children: string('Raised button'),
  className: className(),
  disabled: bool(),
  onClick: func(),
  theme: oneOf('light', 'dark'),
  type: oneOf('button', 'reset', 'submit')
});
