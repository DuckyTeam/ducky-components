import React from 'react';
import SettingsItem from '../SettingsItem';
import Spacer from '../Spacer';
import ToggleButtonWithLabel from '../ToggleButtonWithLabel';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItemNotifications(props) {
  return (
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
        <ToggleButtonWithLabel
          checked={props.checked}
          label={'Sosiale varsler'}
          />
        <Typography
          className={styles.notificationText}
          type="caption2Normal"
          >
          {'For eksempel når noen liker eller kommenterer dine aktiviteter, eller begynner å følge deg.'}
        </Typography>
        <Spacer size={'large'} />

      </Wrapper>
    </SettingsItem>
  );
}

SettingsItemNotifications.propTypes = {
  checked: PropTypes.bool,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSaveButtonClick: PropTypes.func
};

export default SettingsItemNotifications;
