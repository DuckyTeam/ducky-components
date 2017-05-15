import { stories, className, string, func } from "../duckyStories";
import Typ11 from "./index";

stories(module, Typ11, ["https://github.com/DuckyTeam/ducky-web/issues/599"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
