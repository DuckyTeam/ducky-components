import {stories, className, func, bool, number, string, oneOf} from '../duckyStories';
import LabelNumberDisplay2 from './index';

stories(module, LabelNumberDisplay2, [
  "https://github.com/DuckyTeam/ducky-web/issues/1736"
], {
  animation: bool(),
  caption: string("Innspart totalt"),
  className: className(),
  decimals: number(2),
  icon: oneOf("icon-leaf", "icon-star"),
  number: number(23),
  onClick: func(),
  tooltipText: string("default")
});
