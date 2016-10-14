import {stories, className, json, number, bool, string} from '../duckyStories';
import GoalDeleteConfirmationModal from './index';

stories(module, GoalDeleteConfirmationModal, [
  "https://github.com/DuckyTeam/ducky-web/issues/1442"
], {
  className: className(),
  title: string("Tittel"),
  children: string("Default tekst"),
  show: bool()
});
