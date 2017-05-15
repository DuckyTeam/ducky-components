import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';
import Icon from '../Icon';
import LoaderImage from '../LoaderImage';
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
        {props.logAllText}
      </Typography>
      {props.isLoggingActivity
        ? <LoaderImage />
        : <div
          className={classNames(styles.wrapper, {
            [styles.inactive]: props.inactive,
            [styles.uncheckedActive]: !props.checked && !props.inactive && !props.partiallyChecked,
            [styles.uncheckedInactive]: !props.checked && props.inactive && !props.partiallyChecked,
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
        </div>}
    </div>
    );
}

LogAllButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  isLoggingActivity: PropTypes.bool,
  logAllText: PropTypes.string,
  onClick: PropTypes.func,
  partiallyChecked: PropTypes.bool
};

export default LogAllButton;
