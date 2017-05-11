import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonIconRaised(props) {
  return (
    <button
      className={classNames(styles.raised, {
        [styles.darkBackground]: props.theme === 'dark',
        [props.className]: props.className
      })}
      disabled={Boolean(props.disabled)}
      onClick={props.onClick}
      >
      <Icon
        className={classNames(styles.icon)}
        icon={props.icon}
        size={'small'}
        />
      <Typography
        className={classNames(styles.text)}
        type={'button'}
        >
        {props.children}
      </Typography>
    </button>
  );
}

ButtonIconRaised.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.string
};

export default ButtonIconRaised;
