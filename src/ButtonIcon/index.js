import React from 'react';
import PropTypes from 'prop-types';
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
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.string
};

export default ButtonIcon;
