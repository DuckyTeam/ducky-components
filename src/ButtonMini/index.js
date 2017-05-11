import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonMini(props) {
  return (
    <button
      className={classNames(styles.wrapper, {
        [styles.largerMini]: props.large,
        [styles.borderWrapper]: props.theme === 'border',
        [styles.fillWrapper]: props.theme === 'fill',
        [props.className]: props.className
      })}
      onClick={props.disabled ? null : props.onClick}
      >
      <div className={styles.iconWrapper}>
        <Icon
          className={classNames(styles.icon, {
            [styles.borderIcon]: props.theme === 'border',
            [styles.fillIcon]: props.theme === 'fill'
          })}
          icon={props.icon}
          size={props.large ? "small" : "micro"}
          />
      </div>
    </button>
  );
}

ButtonMini.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  large: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['border', 'fill'])
};

export default ButtonMini;
