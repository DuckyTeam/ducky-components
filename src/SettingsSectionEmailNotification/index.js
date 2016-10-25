import React from 'react';
import SectionHeaderGeneral from "../SectionHeaderGeneral";
import SettingsItemNotifications from "../SettingsItemNotifications";
import Spacer from "../Spacer";

import styles from './styles.css';

const PropTypes = React.PropTypes;

function SettingSectionEmailNotification(props) {
  return (
    <div className={styles.outerContainer} >
      <SectionHeaderGeneral title={'Epostvarsel'} />
      <SettingsItemNotifications
        checkedChallenges={props.checkedChallenges}
        checkedNewsletter={props.checkedNewsletter}
        checkedPersonalGoals={props.checkedPersonalGoals}
        checkedSocialWarnings={props.checkedSocialWarnings}
        expanded={props.expanded}
        inactive={props.inactive}
        notificationValue={props.notificationValue}
        onClick={props.onClick}
        onCloseClick={props.onCloseClick}
        onSaveButtonClick={props.onSaveButtonClick}
        />
      <Spacer size={'double'} />
    </div>
  );
}

SettingSectionEmailNotification.propTypes = {
  checkedChallenges: PropTypes.bool,
  checkedNewsletter: PropTypes.bool,
  checkedPersonalGoals: PropTypes.bool,
  checkedSocialWarnings: PropTypes.bool,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  notificationValue: PropTypes.number,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSaveButtonClick: PropTypes.func
};
export default SettingSectionEmailNotification;
