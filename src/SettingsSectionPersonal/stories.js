import {stories, className, func, number, oneOf, bool, string} from '../duckyStories';
import SettingsSectionPersonal from './index';

stories(module, SettingsSectionPersonal, [
  'https://github.com/DuckyTeam/ducky-web/issues/1582'
], {
  aDay: oneOf('1', '2', '3', '4', '5', '6', '7', '8',
  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'),
  aMonth: oneOf('Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'),
  aYear: number(1999),
  birthday: number(2345678765),
  className: className(),
  title: string('Personlig Info'),
  expandedBirthday: bool(),
  expandedGender: bool(),
  expandedLocation: bool(),
  inactiveBirthday: bool(),
  inactiveGender: bool(),
  inactiveLocation: bool(),
  isFilterPopupOpenLocation: bool(),
  gender: oneOf('Mann', 'Kvinne', 'kjøttpinne'),
  selectedCounty: oneOf('Østfold', 'Akershus', 'Oslo', 'Hedmark', 'Oppland',
    'Buskerud', 'Vestfold', 'Telemark', 'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland',
    'Sogn og Fjordane', 'Møre og Romsdal', 'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland',
    'Troms', 'Finnmark'),
  handleClickBirthday: func(),
  handleCloseClickBirthday: func(),
  handlePopOverMenuClickedBirthday: func(),
  handleSaveButtonClickedBirthday: func(),
  handleClickLocation: func(),
  handleCloseClickLocation: func(),
  handlePopOverMenuClickedLocation: func(),
  handleSaveButtonClickedLocation: func(),
  handleClickGender: func(),
  handleCloseClickGender: func(),
  handleRadioButtonClickedGender: func(),
  handleSaveButtonClickedGender: func()

});
