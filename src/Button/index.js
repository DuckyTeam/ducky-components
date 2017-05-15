import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function Button(props) {
  return (
    <button
      className={classNames(styles.flat, {[props.className]: props.className})}
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

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  type: PropTypes.string
};

export default Button;
