import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBarVerticalFat(props) {
  let color = '';

  if (props.color) {
    color = props.color;
  } else if (props.type && props.type.toUpperCase() === 'CO2') {
    color = '#1cbaa5';
  } else if (props.type && props.type.toUpperCase() === 'POINTS') {
    color = '#8BC34A';
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.progressBarVertical, {
          [styles.inactiveWrapper]: props.inactive,
          [styles.progressBarVerticalWithHover]: props.onClick && !props.inactive,
          [props.className]: props.className
        })}
        onClick={props.inactive ? null : props.onClick}
        >
        <div
          className={classNames(styles.progress, {
            [styles.inactive]: props.inactive
          })}
          style={{height: `${props.percent}%`, backgroundColor: color}}
          />
      </div>
    </div>
  );
}

ProgressBarVerticalFat.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  type: PropTypes.string
};

export default ProgressBarVerticalFat;
