import { stories, className, string } from "../duckyStories";
import Typ33 from "./index";

stories(module, Typ33, ["https://github.com/DuckyTeam/ducky-web/issues/676"], {
  children: string("Component"),
  className: className(),
  onClick: func()
});
