import SectionHeaderGeneral from '../SectionHeaderGeneral';
import SettingsItemBirthday from '../SettingsItemBirthday';
import SettingsItemGender from '../SettingsItemGender';
import SettingsItemLocation from '../SettingsItemLocation';
import Spacer from '../Spacer';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;
const Header = SectionHeaderGeneral;
const Gender = SettingsItemGender;
const Location = SettingsItemLocation;
const Birthday = SettingsItemBirthday;

function SettingsSectionPersonal(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <div>
        <Header title={props.title} />
      </div>
      <div>
        <Birthday
          birthday={props.birthday}
          day={props.aDay}
          month={props.aMonth}
          year={props.aYear}
          expanded={props.expandedBirthday}
          inactive={props.inactiveBirthday}
          onClick={props.handleClickBirthday}
          onCloseClick={props.handleCloseClickBirthday}
          onSaveButtonClicked={props.handleSaveButtonClickedBirthday}
          />
      </div>
      <div>
        <Gender expanded={props.expandedGender}
          gender={props.gender}
          inactive={props.inactiveGender}
          onClick={props.handleClickGender}
          onCloseClick={props.handleCloseClickGender}
          oneSaveButtonClicked={props.handleSaveButtonClickedGender}
          />
      </div>
      <div>
        <Location expanded={props.expandedLocation}
          inactive={props.inactiveLocation}
          isFilterPopupOpen={props.isFilterPopupOpenLocation}
          onClick={props.handleClickLocation}
          onCloseClick={props.handleCloseClickLocation}
          onSaveButtonClicked={props.handleSaveButtonClickedLocation}
          selectedCounty={props.selectedCounty}
          styles={styles.content}
          />
      </div>
      <Spacer size="double" />
    </div>
    );
}

SettingsSectionPersonal.propTypes = {
  aDay: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8',
  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']),
  aMonth: PropTypes.oneOf(['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember']),
  aYear: PropTypes.number,
  birthday: PropTypes.number,
  className: PropTypes.string,
  expandedBirthday: PropTypes.bool,
  expandedGender: PropTypes.bool,
  expandedLocation: PropTypes.bool,
  gender: PropTypes.oneOf(),
  handleClickBirthday: PropTypes.func,
  handleClickGender: PropTypes.func,
  handleClickLocation: PropTypes.func,
  handleCloseClickBirthday: PropTypes.func,
  handleCloseClickGender: PropTypes.func,
  handleCloseClickLocation: PropTypes.func,
  handleSaveButtonClickedBirthday: PropTypes.func,
  handleSaveButtonClickedGender: PropTypes.func,
  handleSaveButtonClickedLocation: PropTypes.func,
  inactiveBirthday: PropTypes.bool,
  inactiveGender: PropTypes.bool,
  inactiveLocation: PropTypes.func,
  isFilterPopupOpenLocation: PropTypes.bool,
  onPopOverMenuClickedLocation: PropTypes.func,
  onSaveButtonClickedLocation: PropTypes.func,
  selectedCounty: PropTypes.oneOf(['Østfold', 'Akershus', 'Oslo', 'Hedmark', 'Oppland',
    'Buskerud', 'Vestfold', 'Telemark', 'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland',
    'Sogn og Fjordane', 'Møre og Romsdal', 'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland',
    'Troms', 'Finnmark']),
  title: PropTypes.string

};

export default SettingsSectionPersonal;
