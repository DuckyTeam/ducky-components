import { stories, className, string, func } from "../duckyStories";
import Typ40 from "./index";

stories(module, Typ40, ["https://github.com/DuckyTeam/ducky-web/issues/605"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
