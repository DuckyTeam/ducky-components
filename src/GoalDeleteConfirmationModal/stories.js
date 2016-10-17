import {module, stories, className, bool, string, func} from '../duckyStories';
import GoalDeleteConfirmationModal from './index';

stories(module, GoalDeleteConfirmationModal, [
  "https://github.com/DuckyTeam/ducky-web/issues/1442"
], {
  className: className(),
  children: string("Default text"),
  onCancel: func(),
  onOk: func(),
  show: bool(),
  title: string("Tittel")
});
