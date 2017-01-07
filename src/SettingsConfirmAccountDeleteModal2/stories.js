import {stories, string, className, bool} from '../duckyStories';
import SettingsConfirmAccountDeleteModal2 from './index';

stories(module, SettingsConfirmAccountDeleteModal2, [
  'https://github.com/DuckyTeam/ducky-web/issues/2517'
], {
  buttonDisabled: bool(),
  className: className(),
  show: bool(),
  buttonText: string("Bekreft sletting"),
  closeIcon: string(),
  confirmDeleteHeader: string("Bekreft sletting"),
  confirmDeleteText: string("Dette sletter profilen din og alle data du har lagt inn. Du kan ikke angre."),
  passwordPlaceholder: string(),
  mainIcon: string()
});
