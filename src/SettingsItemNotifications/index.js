import React from 'react';
import SettingsItem from '../SettingsItem';
import Spacer from '../Spacer';
import ToggleButtonWithLabel from '../ToggleButtonWithLabel';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class SettingsItemNotifications extends React.Component {
  getNotificationValue(notificationValue) {
    switch (notificationValue) {
    case 0:
      return 'Ikke forstyrr';
    case 1:
      return 'Reservert';
    case 2:
      return 'Moderat';
    case 3:
      return 'Nyskjerrig';
    case 4:
      return 'Alltid oppdatert';
    default:
      return null;
    }
  }
  render() {
    return (
      <SettingsItem
        expanded={this.props.expanded}
        handleCloseClick={this.props.onCloseClick}
        handleSaveButtonClicked={this.props.onSaveButtonClick}
        inactive={this.props.inactive}
        label={'Nivå'}
        onClick={this.props.onClick}
        value={this.getNotificationValue(this.props.notificationValue)}
        >
        <Wrapper className={styles.wrapper}
          size={'standard'}
          >
          <ToggleButtonWithLabel
            checked={this.props.checkedSocialWarnings}
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
            checked={this.props.checkedChallenges}
            label={"Utfordringer"}
            />
          <Typography
            className={styles.notificationText}
            type="caption2Normal"
            >
            {'Oppdateringer om fremdrift på utfordringer du deltar i, og når nye utfordringer er tilgjengelige.'}
          </Typography>
          <Spacer size={'large'} />
          <ToggleButtonWithLabel
            checked={this.props.checkedPersonalGoals}
            label={"Personlige mål"}
            />
          <Typography
            className={styles.notificationText}
            type="caption2Normal"
            >
            {'Oppdateringer om fremdrift på dine personlige mål.'}
          </Typography>
          <Spacer size={'large'} />
          <ToggleButtonWithLabel
            checked={this.props.checkedNewsletter}
            label={'Motta nyhetsbrev'}
            />
        </Wrapper>
      </SettingsItem>
    );
  }
}

SettingsItemNotifications.propTypes = {
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

export default SettingsItemNotifications;
