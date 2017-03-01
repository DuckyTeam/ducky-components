import React from 'react';
import LabelSmall from '../LabelSmall';
import Typography from '../Typography';
import styles from './styles.css';
import classNames from 'classnames';
import {PropTypes} from 'react';

function LeaderboardLabelSet1(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Typography
        className={styles.name}
        type="caption2Strong"
        >
        {props.name}
      </Typography>
      <LabelSmall
        className={styles.icon}
        content={props.points}
        icon={props.icon}
        onClick={props.onClick}
        type="caption2Strong"
        />
    </div>
  );
}

LeaderboardLabelSet1.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  points: PropTypes.number
};

export default LeaderboardLabelSet1;
