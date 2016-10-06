import React from 'react';
import ProgressBar from '../ProgressBar';
import Typography from '../Typography';
import LabelSmall from '../LabelSmall';
import styles from './styles.css';

function ChallengeMeta5(props) {
  let progressColor = '#0099a9';

  if (props.level === 2) {
    progressColor = '#35b8c4';
  }
  if (props.level === 3) {
    progressColor = '#9de2e8';
  }
  return (
    <div className={styles.wrapper}>
      <ProgressBar
        className={styles.progressBar}
        color={progressColor}
        percent={props.progress}
      />
      <div className={styles.statsWrapper}>
        <LabelSmall
          className={styles.goal}
          content={props.goal}
          icon={'icon-leaf'}
          type={"caption2Strong"}
        />
        <Typography
          className={styles.label}
          type="caption2Normal"
        >
          {'Neste nivå'}
        </Typography>
        <Typography
          className={styles.percent}
          type="caption2Strong"
        >
          {`${props.progress.toFixed(0)}%`}
        </Typography>
      </div>
    </div>
  );
}

ChallengeMeta5.propTypes = {
  goal: React.PropTypes.number,
  level: React.PropTypes.number,
  progress: React.PropTypes.number
};

export default ChallengeMeta5;
