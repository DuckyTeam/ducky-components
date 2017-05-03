import React from 'react';
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
  className: React.PropTypes.string,
  expectedParticipants: React.PropTypes.number,
  icon: React.PropTypes.string,
  isUserSection: React.PropTypes.bool,
  name: React.PropTypes.string,
  participantCount: React.PropTypes.number,
  participantPercentage: React.PropTypes.number,
  sectionName: React.PropTypes.string
};

export default ChallengeMeta13;
