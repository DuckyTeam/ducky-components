import React from 'react';
import {PropTypes} from 'react';
import Typography from '../Typography';
import Spacer from '../Spacer';
import ProgressBar from '../ProgressBar';
import styles from './styles.css';
import moment from 'moment';
import classNames from 'classnames';

function ProgressBarChallengeDates(props) {
  const momentStartDate = moment(props.startDate).startOf('day').valueOf();
  const momentEndDate = moment(props.endDate).startOf('day').valueOf();
  const momentToday = moment(Date.now()).startOf('day').valueOf();
  const daysFromStart = moment(momentToday).diff(momentStartDate, 'days');
  const totalDays = moment(momentEndDate).diff(momentStartDate, 'days');
  const percentFromStart = (daysFromStart * 100) / totalDays;
  const barColor = props.theme === 'dark' ? 'rgba(255, 255, 255, 0.40)' : '#90a4ae';

  return (
    <div
      className={classNames({
        [props.className]: props.className}
      )}
      >
      <span className={styles.textWrapper}>
        <Typography
          className={classNames({
            [styles.darkText]: props.theme === 'dark',
            [styles.lightText]: props.theme === 'light'
          })}
          type="caption2Normal"
          >
           {moment(props.startDate).format('D. MMMM')} - <small>{moment(props.startDate).format('HH:mm')}</small>
        </Typography>
        <Typography
          className={classNames({
            [styles.darkText]: props.theme === 'dark',
            [styles.lightText]: props.theme === 'light'
          })}
          type="caption2Normal"
          >
           {moment(props.endDate).format('D. MMMM')} - <small>{moment(props.endDate).format('HH:mm')}</small>
        </Typography>
      </span>
      <Spacer size="standard" />
      <ProgressBar
        className={classNames({
          [styles.darkThemeProgressBar]: props.theme === 'dark',
          [styles.progressBarBackground]: props.theme === 'light'
        })}
        color={barColor}
        percent={percentFromStart}
        size="standard"
        />
    </div>
  );
}

ProgressBarChallengeDates.propTypes = {
  className: PropTypes.string,
  endDate: PropTypes.number,
  startDate: PropTypes.number,
  theme: PropTypes.string
};

export default ProgressBarChallengeDates;
