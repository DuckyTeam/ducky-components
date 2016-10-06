import {stories, className, func, bool, oneOf} from '../duckyStories';
import SettingsItemLocation from './index';

stories(module, SettingsItemLocation, [
  'https://github.com/DuckyTeam/ducky-web/issues/1581'
], {
  className: className(),
  editMode: bool(),
  handleIconAvaWrapperClosed: func(),
  handleSaveButtonClicked: func(),
  inactive: bool(),
  isFilterPopupOpen: bool(),
  onClick: func(),
  onPopOverMenuClicked: func(),
  onRadioButtonClicked: func(),
  selectedCounty: oneOf('Østfold', 'Akershus', 'Oslo', 'Hedmark', 'Oppland',
    'Buskerud', 'Vestfold', 'Telemark', 'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland',
    'Sogn og Fjordane', 'Møre og Romsdal', 'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland',
    'Troms', 'Finnmark')
});
