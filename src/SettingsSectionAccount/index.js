import React from 'react';
import classNames from 'classnames';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import SettingsItemEmail from '../SettingsItemEmail';
import SettingsItemPassword from '../SettingsItemPassword';
import moment from 'moment';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Spacer from '../Spacer';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsSectionAccount(props) {
  return (
    <div className={styles.outerWrapper}>
      <SectionHeaderGeneral
        title={props.title}
        />
      <SettingsItemEmail
        email={props.email}
        emailOnClick={props.emailOnClick}
        />
      <SettingsItemPassword
        className={classNames({[props.className]: props.className})}
        confirmNewPassword={props.confirmNewPassword}
        expanded={props.expanded}
        inactive={props.inactive}
        newPassword={props.newPassword}
        oldPassword={props.oldPassword}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onClick={props.onClick}
        onCloseClick={props.onCloseClick}
        onFocus={props.onFocus}
        onRadioButtonClicked={props.onRadioButtonClicked}
        onSaveButtonClicked={props.onSaveButtonClicked}
        size={props.textSize}
        textAreaLength={props.textAreaLength}
        textSize={props.textSize}
        />
      <Wrapper className={classNames(styles.wrapper,
            {[props.className]: props.className})}
        size={'standard'}
        >
        <Typography
          className={styles.text}
          type="caption2Normal"
          >
            {'Aktiv Siden '}
            {moment(props.date).format("MMMM YYYY")}
        </Typography>
      </Wrapper>

      <Spacer
        className={styles.hr}
        size={'double'}
        />
    </div>
    );
}

SettingsSectionAccount.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  confirmNewPassword: PropTypes.string,
  date: PropTypes.number,
  email: PropTypes.string,
  emailOnClick: PropTypes.func,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  newPassword: PropTypes.string,
  oldPassword: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onFocus: PropTypes.func,
  onRadioButtonClicked: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  text: PropTypes.string,
  textAreaLength: PropTypes.number,
  textSize: PropTypes.string,
  theme: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};
export default SettingsSectionAccount;
