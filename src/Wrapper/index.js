import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function Wrapper(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles[props.size]]: props.size,
        [props.className]: props.className
      })}
      onClick={props.onClick}
      style={props.style}
      >
        {props.children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['standard', 'side-bottom', 'side', 'narrow', 'slim',
    'short', 'midget', 'squat', 'slender', 'large']),
  style: PropTypes.object
};

export default Wrapper;
