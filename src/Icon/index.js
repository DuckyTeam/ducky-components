import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function Icon(props) {
  return (
    <span
      className={classNames(styles.wrapper, {
        [props.icon]: props.icon,
        [styles[props.size]]: props.size,
        [props.className]: props.className
      })}
      onClick={props.onClick}
      style={props.style}
      >
    </span>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['nano', 'micro', 'mini', 'small', 'standard',
      'large1', 'large2', 'display1', 'display2']),
  style: PropTypes.shape({})
};

export default Icon;
