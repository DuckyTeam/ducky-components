import React from 'react';
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
  bgColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  size: React.PropTypes.string
};

export default IconCircularFrame;
