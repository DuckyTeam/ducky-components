import { stories, className, string, func } from "../duckyStories";
import Typ60 from "./index";

stories(module, Typ60, ["https://github.com/DuckyTeam/ducky-web/issues/609"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
