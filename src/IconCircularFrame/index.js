import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import styles from './styles.css';

function IconCircularFrame(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.border]: props.borderColor,
        [styles[props.size]]: props.size
      })}
      style={{backgroundColor: props.bgColor, borderColor: props.borderColor}}
      >
      <Icon
        className={classNames(styles.icon, {[props.className]: props.className})}
        icon={props.icon}
        size={props.size}
        />
    </div>
  );
}

IconCircularFrame.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string
};

export default IconCircularFrame;
