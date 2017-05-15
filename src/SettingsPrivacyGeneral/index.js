import React from 'react';
import PropTypes from 'prop-types';
import SettingsItem from '../SettingsItem';


function SettingsPrivacyGeneral(props) {
  return (
    <SettingsItem
      inactive
      label={'Innstilling'}
      onClick={props.onClick}
      value={props.privacySettings ? props.privacySettings : 'normal'}
      />
  );
}

SettingsPrivacyGeneral.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  privacySettings: PropTypes.string
};

export default SettingsPrivacyGeneral;
