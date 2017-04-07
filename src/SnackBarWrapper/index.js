import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SnackBarWrapper(props) {
  return (
    <div className={classNames(styles.wrapper, props.className)}>
      {props.children}
    </div>
  );
}

SnackBarWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool
};

export default SnackBarWrapper;
