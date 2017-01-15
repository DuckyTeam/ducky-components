import Icon from '../Icon';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonMini(props) {
  return (
    <button
      className={classNames(styles.wrapper, {
        [styles.largerMini]: props.larger,
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
          size={props.larger ? "small" : "micro"}
          />
      </div>
    </button>
  );
}

ButtonMini.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.string,
  larger: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  theme: React.PropTypes.oneOf(['border', 'fill'])
};

export default ButtonMini;
