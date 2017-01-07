import React from 'react';
import ActionButton from '../ActionButton';
import Typography from '../Typography';
import styles from './styles.css';

const PropTypes = React.PropTypes;

function SettingsItemDeleteAccount(props) {
  return (
    <div className={styles.wrapper}>
      <ActionButton
        className={styles.icon}
        icon="icon-duck"
        size="main"
        />
      <div className={styles.innerWrap}>
        <Typography
          className={styles.textHistoryDelete}
          type="caption2Normal"
          >
          {props.textHistoryDelete}
        </Typography>
        <Typography
          className={styles.textDeleteAccount}
          onClick={props.onClickDelete}
          type="caption2Strong"
          >
          {props.textDeleteAccount}
        </Typography>
      </div>
    </div>
  );
}

SettingsItemDeleteAccount.propTypes = {
  icon: PropTypes.string,
  onClickDelete: PropTypes.func,
  textDeleteAccount: PropTypes.string,
  textHistoryDelete: PropTypes.string
};

export default SettingsItemDeleteAccount;
