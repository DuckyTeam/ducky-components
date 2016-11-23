import React from 'react';
import {PropTypes} from 'react';
import Typography from '../Typography';
import Spacer from '../Spacer';
import ProgressBar from '../ProgressBar';
import styles from './styles.css';
import moment from 'moment';

function ProgressBarChallengeDates(props) {
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
          type="caption2Normal"
          >
           {moment(props.startDate).format('D. MMMM')}
        </Typography>
        <Typography
          type="caption2Normal"
          >
           {moment(props.endDate).format('D. MMMM')}
        </Typography>
      </span>
      <Spacer size="standard" />
      <ProgressBar
        color={props.color}
        percent={percentFromStart}
        size="standard"
        />
    </div>
  );
}

ProgressBarChallengeDates.propTypes = {
  color: PropTypes.string,
  endDate: PropTypes.number,
  startDate: PropTypes.number
};

export default ProgressBarChallengeDates;
