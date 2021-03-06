import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ProgressCirclePercentage from '../ProgressCirclePercentage';
import styles from './styles.css';

function ParticipationChart(props) {
  return (
    <Wrapper
      className={styles.wrapper}
      type={'standard'}
      >
      <ProgressCirclePercentage
        className={styles.percentage}
        percent={props.percentage}
        type={'points'}
        />
      <Typography
        className={styles.participationText}
        type={'caption2Normal'}
        >
        {`${props.participantCounts} av totalt ${props.expectedParticipantCounts} inviterte deltagere er med i denne utfordringen.`}
      </Typography>
    </Wrapper>
  );
}

ParticipationChart.propTypes = {
  expectedParticipantCounts: PropTypes.number,
  participantCounts: PropTypes.number,
  percentage: PropTypes.number
};

export default ParticipationChart;
