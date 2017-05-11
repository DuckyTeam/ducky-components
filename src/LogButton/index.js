import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';
import Icon from './../Icon';

function LogButton(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.checked]: props.checked,
        [styles.inactive]: props.inactive,
        [styles.checkedInactive]: props.checked && props.inactive,
        [props.className]: props.className
      })}
      onClick={!props.inactive && props.onClick}
      >
      <Icon
        icon={props.icon || "icon-check"}
        size={"small"}
        />
    </div>
  );
}

LogButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  inactive: PropTypes.bool,
  onClick: PropTypes.func
};

export default LogButton;
