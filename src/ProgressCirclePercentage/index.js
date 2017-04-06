import React from 'react';
import styles from './styles.css';
import ProgressCircle from '../ProgressCircle';
import Typography from '../Typography';
const PropTypes = React.PropTypes;

function ProgressCirclePercentage(props) {
  return (
    <div className={styles.container}>
      <ProgressCircle
        big
        percent={props.percent}
        type={props.type}
        />
      <Typography
        className={styles.percentage}
        type={'display2'}
        >
          {`${props.percent}%`}
      </Typography>
    </div>
  );
}

ProgressCirclePercentage.propTypes = {
  percent: PropTypes.number,
  type: PropTypes.string
};

export default ProgressCirclePercentage;
