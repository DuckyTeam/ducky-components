import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Icon from './../Icon';
import Typography from '../Typography';

function LogAllButton(props) {
  return (
    <div
      className={styles.outerwrapper}
      >
      <Typography className={classNames(styles.text, {
        [styles.textUncheckedActive]: !props.checked && !props.inactive,
        [styles.textInactive]: !props.checked && props.inactive,
        [styles.textcheckedInactive]: props.checked && props.inactive,
        [styles.textcheckedActive]: props.checked && !props.inactive,
        [styles.textpartiallyChecked]: props.partiallyChecked && !props.inactive
      })}
        onClick={!props.inactive && props.onClick}
        type="caption2Normal"
        >
        {'Log alle'}
      </Typography>
      <div
        className={classNames(styles.wrapper, {
          [styles.uncheckedActive]: !props.checked && !props.inactive,
          [styles.uncheckedInactive]: !props.checked && props.inactive,
          [styles.checkedActive]: props.checked && !props.inactive,
          [styles.checkedInactive]: props.checked && props.inactive,
          [styles.partiallyChecked]: props.partiallyChecked && !props.inactive,
          [styles.partiallyCheckedInactive]: props.partiallyChecked && props.inactive,
          [props.className]: props.className
        })}
        onClick={!props.inactive && props.onClick}
        >
        <Icon
          icon={"icon-done_all"}
          size={"small"}
          />
      </div>
    </div>
    );
}

LogAllButton.propTypes = {
  checked: React.PropTypes.bool,
  className: React.PropTypes.string,
  inactive: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  partiallyChecked: React.PropTypes.bool
};

export default LogAllButton;
