import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBarVertical(props) {
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
      className={classNames(styles.wrapper, {
        [styles.inactiveWrapper]: props.inactive,
        [props.className]: props.className})}
      onClick={props.onClick}
      >
      <div
        className={styles.progress}
        style={{height: `${props.percent}%`, backgroundColor: color}}
        />
    </div>
  );
}

ProgressBarVertical.propTypes = {
  className: PropTypes.string,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  type: PropTypes.string
};

export default ProgressBarVertical;
