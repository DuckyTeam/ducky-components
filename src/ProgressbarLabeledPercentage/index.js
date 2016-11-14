import React from 'react';
import classNames from 'classnames';
import ProgressBar from '../ProgressBar';
import Typography from '../Typography';
import styles from './styles.css';

function ProgressbarLabeledPercentage(props) {
  return (
    <div
      className={classNames(styles.wrapper, {[props.className]: props.className})}
      size="standard"
      >
      <div className={classNames(styles.categoryWrapper)}>
        <Typography
          className={styles.categoryTitle}
          type="caption2Normal"
          >
          {props.categoryText}
        </Typography>
        <Typography
          className={styles.categoryPercentage}
          type="caption2Normal"
          >
          {props.percent}%
        </Typography>
      </div>
      <ProgressBar
        className={styles.categoryProgress}
        color={props.color}
        percent={props.scaledPercent}
        size="wide"
        />
    </div>
  );
}

ProgressbarLabeledPercentage.propTypes = {
  categoryText: React.PropTypes.string,
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  percent: React.PropTypes.number,
  scaledPercent: React.PropTypes.number
};

export default ProgressbarLabeledPercentage;
