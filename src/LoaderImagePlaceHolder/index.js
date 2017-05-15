import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';
import Icon from '../Icon';

function LoaderImagePlaceHolder(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className,
      [styles.hide]: props.hide
    })}>
      <div className={classNames(styles.outer_wrapper, {
        [props.className]: props.className,
        [styles.hide]: props.hide
      })}>
        <div className={classNames(styles.loader, {
          [styles.hide]: props.hide
        })} />
        <Icon
          className={styles.iconWrapper}
          icon={'icon-photo'}
          size={'small'}
          />
      </div>
      {props.children
        ? <div className={styles.text}>
          {props.children}
        </div>
        : null
      }
    </div>
  );
}

LoaderImagePlaceHolder.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hide: PropTypes.bool,
  image: PropTypes.bool,
  size: PropTypes.string
};

export default LoaderImagePlaceHolder;
