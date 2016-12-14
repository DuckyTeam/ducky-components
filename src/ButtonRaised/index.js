import React from 'react';
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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  theme: React.PropTypes.string,
  type: React.PropTypes.string
};

export default ButtonRaised;
