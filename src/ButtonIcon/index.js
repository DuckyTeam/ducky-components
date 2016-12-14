import React from 'react';
import Typography from '../Typography';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonIcon(props) {
  return (
    <button
      className={classNames(styles.flat, {[props.className]: props.className})}
      disabled={Boolean(props.disabled)}
      onClick={props.onClick}
      >
      <Icon className={classNames(styles.icon, {[styles.darkIcon]: props.theme === 'dark'})}
        icon={props.icon}
        size={"small"}
        />
      <Typography
        className={classNames(styles.text, {
          [styles.darkText]: props.theme === 'dark'
        })}
        type={'button'}
        >
        {props.children}
      </Typography>
    </button>
  );
}

ButtonIcon.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.string,
  onClick: React.PropTypes.func,
  theme: React.PropTypes.string
};

export default ButtonIcon;
