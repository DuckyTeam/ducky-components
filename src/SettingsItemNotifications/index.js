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
      <Wrapper className={styles.wrapper}
        size={'standard'}
        >
        <ToggleButtonWithLabel
          checked={props.checkedSocialWarnings}
          label={'Sosiale varsler'}
          />
        <Typography
          className={styles.notificationText}
          type="caption2Normal"
          >
          {'For eksempel når noen liker eller kommenterer dine aktiviteter, eller begynner å følge deg.'}
        </Typography>
        <Spacer size={'large'} />
        <ToggleButtonWithLabel
          checked={props.checkedChallenges}
          label={"Utfordringer"}
          />
        <Typography
          className={styles.notificationText}
          type="caption2Normal"
          >
          Oppdateringer om fremdrift på utfordringer du deltar i, og når nye utfordringer er tilgjengelige.
        </Typography>
        <Spacer size={'large'} />
        <ToggleButtonWithLabel
          checked={props.checkedPersonalGoals}
          label={"Personlige mål"}
          />
        <Typography
          className={styles.notificationText}
          type="caption2Normal"
          >
          Oppdateringer om fremdrift på dine personlige mål.
        </Typography>
        <Spacer size={'large'} />
        <ToggleButtonWithLabel
          checked={props.checkedNewsletter}
          label={'Motta nyhetsbrev'}
          />
      </Wrapper>
    </SettingsItem>
  );
}

SettingsItemNotifications.propTypes = {
  checkedChallenges: PropTypes.bool,
  checkedNewsletter: PropTypes.bool,
  checkedPersonalGoals: PropTypes.bool,
  checkedSocialWarnings: PropTypes.bool,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSaveButtonClick: PropTypes.func
};

export default SettingsItemNotifications;
