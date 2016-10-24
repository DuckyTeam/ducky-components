import React from 'react';
import SettingsItem from '../SettingsItem';
import styles from './styles';
const PropTypes = React.PropTypes;

function SettingsItemNotification(props) {
  return(
    <SettingsItem
      expanded={props.expanded}
      handleCloseClick={props.onCloseClick}
      handleSaveButtonClicked={props.onSaveButtonClick}
      inactive={props.inactive}
      label={'Nivå'}
      onClick={props.onClick}
      value={'tmp'}
      >
      <Wrapper
        size={'standard'}
        >
          
      </Wrapper>
    </SettingsItem>
  );
}

SettingsItemNotification.propTypes = {
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSaveButtonClick: PropTypes.func
};

export default SettingsItemNotification;
