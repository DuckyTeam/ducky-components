import React from 'react';
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
  className: React.PropTypes.string
};

export default BackgroundLoader;
