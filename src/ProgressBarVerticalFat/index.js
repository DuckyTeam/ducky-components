import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBarVerticalFat(props) {
  let color = '';

  if (props.type && props.type.toUpperCase() === 'CO2') {
    color = '#1cbaa5';
  } else if (props.type && props.type.toUpperCase() === 'POINTS') {
    color = '#8BC34A';
  } else {
    color = props.type;
  }

  return (
    <div
      className={classNames(styles.progressBarVertical, {
        [styles.inactiveWrapper]: props.inactive,
        [styles.progressBarVerticalWithHover]: props.onClick && !props.inactive,
        [props.className]: props.className})}
      onClick={props.inactive ? null : props.onClick}
      >
      <div
        className={styles.progress}
        style={{height: `${props.percent}%`, backgroundColor: color}}
        />
    </div>
  );
}

ProgressBarVerticalFat.propTypes = {
  className: PropTypes.string,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  type: PropTypes.string
};

export default ProgressBarVerticalFat;
