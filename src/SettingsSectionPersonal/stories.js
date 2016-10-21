import {stories, className, func, oneOf, bool, string} from '../duckyStories';
import SettingsSectionPersonal from './index';

stories(module, SettingsSectionPersonal, [
  'https://github.com/DuckyTeam/ducky-web/issues/1582'
], {
  className: className(),
  title: string('Personlig Info'),
  expandedGender: bool(),
  expandedLocation: bool(),
  inactiveGender: bool(),
  inactiveLocation: bool(),
  isFilterPopupOpenLocation: bool(),
  gender: oneOf('Mann', 'Kvinne', 'kjøttpinne'),
  selectedCounty: oneOf('Østfold', 'Akershus', 'Oslo', 'Hedmark', 'Oppland',
    'Buskerud', 'Vestfold', 'Telemark', 'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland',
    'Sogn og Fjordane', 'Møre og Romsdal', 'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland',
    'Troms', 'Finnmark'),
  onClickLocation: func(),
  onCloseClickLocation: func(),
  onPopOverMenuClickedLocation: func(),
  onSaveButtonClickedLocation: func(),
  handleSaveButtonClickedLocation: func(),
  onClickGender: func(),
  onCloseClickGender: func(),
  onRadioButtonClickedGender: func(),
  onSaveButtonClickedGender: func()

});
