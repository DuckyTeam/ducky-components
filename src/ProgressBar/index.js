import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBar(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles[props.size]]: props.size,
        [props.className]: props.className}
        )}
      onClick={props.onClick}
      >
      <div
        className={classNames(styles.progress, {
          [styles[props.size]]: props.size}
        )}
        style={{width: `${props.percent}%`, backgroundColor: props.color}}
        />
    </div>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  size: PropTypes.oneOf(['standard', 'wide'])
};

export default ProgressBar;
