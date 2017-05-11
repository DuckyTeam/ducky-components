import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function Loader(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className,
      //[styles[`wrapper_mini_${props.size}`]]: props.size
      [styles.hide]: props.hide
    })}>
      {props.image
        ? <div className={classNames(styles.iconWrapper, {
          [styles.hide]: props.hide,
          [styles[`iconWrapper_${props.size}`]]: props.size
        })}>
          <div className={classNames(styles.loader, {
            [styles[`loader_${props.size}`]]: props.size
          })} />
          {props.children
          ? <div className={styles.text}>
            {props.children}
          </div>
          : null}
        </div>
        : <div>
          <div className={classNames(styles.loader, {
            [styles[`loader_${props.size}`]]: props.size
          })} />
        </div>
      }
    </div>
  );
}

Loader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hide: PropTypes.bool,
  image: PropTypes.bool,
  size: PropTypes.string
};

export default Loader;
