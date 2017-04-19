import React from 'react';
import styles from './styles.css';
import ProgressCircle from '../ProgressCircle';
import Typography from '../Typography';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function ProgressCirclePercentage(props) {
  return (
    <div className={classNames(styles.container, {[props.className]: props.className})}>
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
  className: PropTypes.string,
  percent: PropTypes.number,
  type: PropTypes.string
};

export default ProgressCirclePercentage;
