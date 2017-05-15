import { stories, className, string, func } from "../duckyStories";
import Typ42 from "./index";

stories(module, Typ42, ["https://github.com/DuckyTeam/ducky-web/issues/607"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
