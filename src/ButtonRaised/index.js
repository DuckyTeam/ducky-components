import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonRaised(props) {
  return (
    <button
      className={classNames(styles.raised, {
        [styles.darkBackground]: props.theme === 'dark',
        [props.className]: props.className
      })}
      disabled={Boolean(props.disabled)}
      onClick={props.onClick}
      type={props.type}
      >
      <Typography
        className={classNames(styles.text, {
          [styles.darkText]: props.theme === 'dark'
        })}
        >
        {props.children}
      </Typography>
    </button>
);
}

ButtonRaised.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  type: PropTypes.string
};

export default ButtonRaised;
