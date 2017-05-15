import { stories, className, string, func } from "../duckyStories";
import Typ32 from "./index";

stories(module, Typ32, ["https://github.com/DuckyTeam/ducky-web/issues/604"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
