import { stories, className, string, func, oneOf } from "../duckyStories";
import Typ31 from "./index";

stories(module, Typ31, ["https://github.com/DuckyTeam/ducky-web/issues/603"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
