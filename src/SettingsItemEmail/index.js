import SettingsItem from '../SettingsItem';
import React from 'react';
const PropTypes = React.PropTypes;

function SettingsItemEmail(props) {
  return (
    <SettingsItem
      inactive
      label={'Epost'}
      onClick={props.onClick}
      value={props.email}
    />
  );
}

SettingsItemEmail.propTypes = {
  email: PropTypes.string,
  onClick: PropTypes.func
};

export default SettingsItemEmail;
