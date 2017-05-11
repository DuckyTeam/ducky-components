import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function SnackBarWrapperMobile(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classNames(styles.snackbarWrapper, {
      [props.className]: props.className
    })}>
      <div
        className={styles[(props.show ? 'showbottom' : 'bottom')]}
        >
        {props.children}
      </div>
    </div>
  );
}

SnackBarWrapperMobile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool
};

export default SnackBarWrapperMobile;
