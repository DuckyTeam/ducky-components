import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function BackgroundLoader(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}>
      <div className={styles.iconWrapper}>
        <div className={styles.loader} />
      </div>
    </div>
  );
}

BackgroundLoader.propTypes = {
  className: PropTypes.string
};

export default BackgroundLoader;
