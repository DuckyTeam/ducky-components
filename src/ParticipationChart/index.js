import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ProgressCirclePercentage from '../ProgressCirclePercentage';
import styles from './styles.css';

function ParticipationChart(props) {
  const {expectedParticipantCounts, participantCounts, percentage} = props;

  return (
    <Wrapper
      className={styles.wrapper}
      type={'standard'}
      >
      <ProgressCirclePercentage
        className={styles.percentage}
        percent={percentage}
        type={'points'}
        />
      <Typography
        className={styles.participationText}
        type={'caption2Normal'}
        >
        {`${participantCounts.total} av totalt ${expectedParticipantCounts.total} inviterte deltagere er med i denne utfordringen.`}
      </Typography>
    </Wrapper>
  );
}

ParticipationChart.propTypes = {
  expectedParticipantCounts: React.PropTypes.object,
  participantCounts: React.PropTypes.object,
  percentage: React.PropTypes.number
};

export default ParticipationChart;
