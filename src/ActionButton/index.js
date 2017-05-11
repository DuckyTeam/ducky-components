import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function ActionButton(props) {
  return (
    <button
      className={classNames(styles.wrapper, {
        [styles[props.size]]: props.size,
        [props.className]: props.className,
        [styles.disabled]: props.disabled
      })}
      disabled={Boolean(props.disabled)}
      onClick={props.onClick}
      >
      <div className={styles.iconWrapper}>
        <Icon
          className={styles.icon}
          icon={props.icon}
          size={props.size === 'standard' ? 'small' : 'standard'}
          />
      </div>
    </button>
  );
}

ActionButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['standard', 'main'])
};

export default ActionButton;
