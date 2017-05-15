import React from 'react';
import PropTypes from 'prop-types';
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

  className: PropTypes.string,
  hide: PropTypes.bool,
  iconName: PropTypes.string,
  image: PropTypes.bool,
  size: PropTypes.string
};

export default LoaderImage;
