import React from 'react';
import Spacer from '../Spacer';
import ProgressBar from '../ProgressBar';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import LeaderboardLabelSet1 from '../LeaderboardLabelSet1';

function LeaderboardLabelSet2(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <LeaderboardLabelSet1
        icon={props.icon}
        name={props.name}
        points={props.points}
        />
      <Spacer size="standard" />
      <ProgressBar
        color={props.progressColor ? props.progressColor : '#00ab97'}
        percent={props.percent}
        size={'standard'}
        />
    </div>
  );
}

LeaderboardLabelSet2.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  percent: PropTypes.number,
  points: PropTypes.number,
  progressColor: PropTypes.string
};

export default LeaderboardLabelSet2;
