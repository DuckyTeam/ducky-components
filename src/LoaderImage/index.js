import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Icon from '../Icon';

function LoaderImage(props) {
  return (
    <div className={classNames(styles.outer_wrapper, {
      [props.className]: props.className,
      [styles.hide]: props.hide
    })}>
      <div className={classNames(styles.loader, {
        [styles.hide]: props.hide
      })} />
      <Icon
        className={styles.iconWrapper}
        icon={props.iconName}
        size={'small'}
        />
    </div>

  );
}

LoaderImage.propTypes = {

  className: React.PropTypes.string,
  hide: React.PropTypes.bool,
  iconName: React.PropTypes.string,
  image: React.PropTypes.bool,
  size: React.PropTypes.string
};

export default LoaderImage;
