import Icon from '../Icon';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ActionButton(props) {
  return (
    <button
      className={classNames(styles.wrapper, {
        [styles[props.size]]: props.size,
        [props.className]: props.className
      })}
      disabled={Boolean(props.disabled)}
      onClick={props.onClick}
      >
      <Icon
        className={styles.icon}
        icon={props.icon}
        size={props.size === 'standard' ? 'small' : 'standard'}
        />
    </button>
  );
}

ActionButton.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.string,
  onClick: React.PropTypes.func,
  size: React.PropTypes.oneOf(['standard', 'main'])
};

export default ActionButton;
