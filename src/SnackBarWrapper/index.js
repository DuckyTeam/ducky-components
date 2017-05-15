import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


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
