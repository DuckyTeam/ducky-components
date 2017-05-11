import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

const MAX_NUM_STANDARD = 999;
const MAX_NUM_SMALL = 99;

function ButtonCounter(props) {
  let counter = props.number;

  if (props.size === 'small') {
    if (counter > MAX_NUM_SMALL) {
      counter = '99+';
    }
  }
  if (counter > MAX_NUM_STANDARD) {
    counter = '999+';
  }

  return (
    <span
      className={classNames(styles.wrapper, {
        [styles[props.size]]: props.size,
        [props.className]: props.className
      })}
      disabled={Boolean(props.disabled)}
      onClick={props.onClick}
      style={props.style}
      >
      <Typography
        className={styles.number}
        type={'caption2Normal'}
        >
            {props.prefix}{counter}
      </Typography>
    </span>
    );
}

ButtonCounter.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  number: PropTypes.string,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(['small', 'standard']),
  style: PropTypes.objectOf(PropTypes.oneOfType(
        [PropTypes.number, PropTypes.string]
    ))
};

export default ButtonCounter;
