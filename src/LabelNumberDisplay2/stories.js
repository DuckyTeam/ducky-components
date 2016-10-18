import {stories, className, string, oneOf} from '../duckyStories';
import LabelNumberDisplay2 from './index';

stories(module, LabelNumberDisplay2, [
  "https://github.com/DuckyTeam/ducky-web/issues/1736"
], {
  className: className(),
  children: string("Innspart totalt"),
  title: string("66.7"),
  icon: oneOf("icon-leaf", "icon-star"),
  text: string("default")
});
