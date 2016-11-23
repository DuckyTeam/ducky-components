import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import moment from 'moment';
import Typography from '../Typography';

function progressBarChallenge(props) {
  const momentStartDate = moment(props.startDate).startOf('day').valueOf();
  const momentEndDate = moment(props.endDate).startOf('day').valueOf();
  const momentToday = moment(Date.now()).startOf('day').valueOf();
  const daysFromStart = moment(momentToday).diff(momentStartDate, 'days');
  const totalDays = moment(momentEndDate).diff(momentStartDate, 'days');
  const percentFromStart = (daysFromStart * 100) / totalDays;

  return (
    <div>
    <span className={styles.wrapper}>
      <Typography
        className={styles.startDate}
        type="caption2Normal"
        >
         {props.startDate}
      </Typography>
      <Typography
        className={styles.endDate}
        type="caption2Normal"
        >
         {props.endDate}
      </Typography>
    </span>
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
        style={{width: `${percentFromStart}%`, backgroundColor: props.color}}
        />
    </div>
    </div>
  );
}

progressBarChallenge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  endDate: React.PropTypes.string,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  size: PropTypes.oneOf(['standard', 'wide']),
  startDate: React.PropTypes.string
};

export default progressBarChallenge;
