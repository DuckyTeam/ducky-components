import { stories, className, string, func } from "../duckyStories";
import Typ41 from "./index";

stories(module, Typ41, ["https://github.com/DuckyTeam/ducky-web/issues/606"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
