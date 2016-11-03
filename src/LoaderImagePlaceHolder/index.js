import React from 'react';
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
          size={props.size}
          />
      </div>
      <div className={styles.text}>
       {props.children}
      </div>
    </div>
  );
}

LoaderImagePlaceHolder.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  hide: React.PropTypes.bool,
  image: React.PropTypes.bool,
  size: React.PropTypes.string
};

export default LoaderImagePlaceHolder;
