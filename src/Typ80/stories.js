import { stories, className, string, func, oneOf } from "../duckyStories";
import Typ10 from "./index";

stories(module, Typ10, ["https://github.com/DuckyTeam/ducky-web/issues/598"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
