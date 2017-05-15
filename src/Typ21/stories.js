import { stories, className, string, func } from "../duckyStories";
import Typ21 from "./index";

stories(module, Typ21, ["https://github.com/DuckyTeam/ducky-web/issues/601"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
