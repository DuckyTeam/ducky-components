import { stories, className, string, func } from "../duckyStories";
import Typ50 from "./index";

stories(module, Typ50, ["https://github.com/DuckyTeam/ducky-web/issues/608"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
