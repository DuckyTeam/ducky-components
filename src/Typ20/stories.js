import { stories, className, string, func } from "../duckyStories";
import Typ20 from "./index";

stories(module, Typ20, ["https://github.com/DuckyTeam/ducky-web/issues/600"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
