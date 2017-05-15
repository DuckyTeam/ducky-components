import { stories, className, string, func } from "../duckyStories";
import Typ30 from "./index";

stories(module, Typ30, ["https://github.com/DuckyTeam/ducky-web/issues/602"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
