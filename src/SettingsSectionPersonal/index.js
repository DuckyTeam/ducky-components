import SectionHeaderGeneral from '../SectionHeaderGeneral';
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

function SettingsSectionPersonal(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <div>
        <Header title={props.title} />
      </div>
      <div>
        <Gender expanded={props.expandedGender}
          gender={props.gender}
          handleCloseClick={props.onCloseClickGender}
          handleSaveButtonClicked={props.onSaveButtonClickedGender}
          inactive={props.inactiveGender}
          onClick={props.onClickGender}
          />
      </div>
      <div>
        <Location expanded={props.expandedLocation}
          handleCloseClick={props.onCloseClickLocation}
          handleSaveButtonClicked={props.onSaveButtonClickedLocation}
          inactive={props.inactiveLocation}
          isFilterPopupOpen={props.isFilterPopupOpenLocation}
          onClick={props.onClickLocation}
          selectedCounty={props.selectedCounty}
          styles={styles.content}
          />
      </div>
      <Spacer size="double" />
    </div>
    );
}

SettingsSectionPersonal.propTypes = {
  className: PropTypes.string,
  expandedGender: PropTypes.bool,
  expandedLocation: PropTypes.bool,
  gender: PropTypes.oneOf(),
  handleCloseClickGender: PropTypes.func,
  handleSaveButtonClickedGender: PropTypes.func,
  handleSaveButtonClickedLocation: PropTypes.func,
  inactiveGender: PropTypes.bool,
  inactiveLocation: PropTypes.func,
  isFilterPopupOpenLocation: PropTypes.bool,
  onClickGender: PropTypes.func,
  onClickLocation: PropTypes.func,
  onCloseClickLocation: PropTypes.func,
  onPopOverMenuClickedLocation: PropTypes.func,
  onSaveButtonClickedLocation: PropTypes.func,
  selectedCounty: PropTypes.oneOf(['Østfold', 'Akershus', 'Oslo', 'Hedmark', 'Oppland',
    'Buskerud', 'Vestfold', 'Telemark', 'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland',
    'Sogn og Fjordane', 'Møre og Romsdal', 'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland',
    'Troms', 'Finnmark']),
  title: PropTypes.string

};

export default SettingsSectionPersonal;
