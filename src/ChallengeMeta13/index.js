import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Label from '../ChallengeCardLabel1';
import styles from './styles.css';
import classNames from 'classnames';

function ChallengeMeta13(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      size={'standard'}
      >
      <Icon
        icon={'icon-location_city'}
        size={'large1'}
        style={{
          marginRight: 16,
          color: props.isUserSection ? '#8bc34a' : '#90a4ae'
        }}
        />
      <div className={styles.innerWrapper}>

        <Typography
          type={'bodyTextStrong'}
          >
          {props.sectionName}
          <Spacer size="standard" />
        </Typography>
        <Label
          expectedParticipants={props.expectedParticipants}
          participantCount={props.participantCount}
          percentValue={Number(((props.participantCount / props.expectedParticipants) * 100).toFixed(0))}
          progPercent={Number(((props.participantCount / props.expectedParticipants) * 100).toFixed(0))}
          type={'participants'}
          />
      </div>
    </Wrapper>
  );
}

ChallengeMeta13.propTypes = {
  className: PropTypes.string,
  expectedParticipants: PropTypes.number,
  icon: PropTypes.string,
  isUserSection: PropTypes.bool,
  name: PropTypes.string,
  participantCount: PropTypes.number,
  participantPercentage: PropTypes.number,
  sectionName: PropTypes.string
};

export default ChallengeMeta13;
