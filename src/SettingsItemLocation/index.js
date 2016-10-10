import SettingsItem from '../SettingsItem';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import PopoverMenuAnchor4 from '../PopoverMenuAnchor4';
import PopoverMenu from '../PopoverMenu';
import Popup from '../Popup';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItemLocation(props) {
  const renderPopup = (
    <Popup className={styles.popup}>
      <PopoverMenu text={'Østfold'} /><br />
      <PopoverMenu text={'Akershus'} /><br />
      <PopoverMenu text={'Oslo'} /><br />
      <PopoverMenu text={'Hedmark'} /><br />
      <PopoverMenu text={'Oppland'} /><br />
      <PopoverMenu text={'Buskerud'} /><br />
      <PopoverMenu text={'Vestfold'} /><br />
      <PopoverMenu text={'Telemark'} /><br />
      <PopoverMenu text={'Aust-Agder'} /><br />
      <PopoverMenu text={'Vest-Agder'} /><br />
      <PopoverMenu text={'Rogaland'} /><br />
      <PopoverMenu text={'Hordaland'} /><br />
      <PopoverMenu text={'Sogn og Fjordane'} /><br />
      <PopoverMenu text={'Møre og Romsdal'} /><br />
      <PopoverMenu text={'Sør-Trøndelag'} /><br />
      <PopoverMenu text={'Nord-Trøndelag'} /><br />
      <PopoverMenu text={'Nordland'} /><br />
      <PopoverMenu text={'Troms'} /><br />
      <PopoverMenu text={'Finnmark'} /><br />
    </Popup>
  );

  return (
    <SettingsItem
      className={classNames({[props.className]: props.className})}
      expanded={props.expanded}
      handleCloseClick={props.onCloseClick}
      handleSaveButtonClicked={props.onSaveButtonClicked}
      inactive={props.inactive}
      label={'Bosted'}
      onClick={props.onClick}
      value={props.selectedCounty}
    >
      <Typography
        className={styles.typoTitle}
        typ={'bodyTextNormal'}
      >
        {'Velg fylke:'}
      </Typography>
      <PopoverMenuAnchor4
        className={styles.typoContent}
        onClick={props.onPopOverMenuClicked}
      >
        {props.selectedCounty}
      </PopoverMenuAnchor4>
      {props.isFilterPopupOpen ? renderPopup : null}
    </SettingsItem>
  );
}

SettingsItemLocation.propTypes = {
  className: PropTypes.string,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  isFilterPopupOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onPopOverMenuClicked: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selectedCounty: PropTypes.oneOf(['Østfold', 'Akershus', 'Oslo', 'Hedmark', 'Oppland',
    'Buskerud', 'Vestfold', 'Telemark', 'Aust-Agder', 'Vest-Agder', 'Rogaland', 'Hordaland',
    'Sogn og Fjordane', 'Møre og Romsdal', 'Sør-Trøndelag', 'Nord-Trøndelag', 'Nordland',
    'Troms', 'Finnmark'])
};

export default SettingsItemLocation;
