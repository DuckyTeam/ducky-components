import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

import Wrapper from '../Wrapper';
import Typography from '../Typography';
import TeamHeader from '../TeamHeader';
import LabelSmall from '../LabelSmall';

function ChallengeEventCardTeamNewLevel(props) {
  return (
    <div
      className={classNames(styles.wrapper, props.className)}
      >
      <Wrapper
        size={"standard"}
        >
        <TeamHeader
          place={props.place}
          teamName={props.teamName}
          time={props.time}
        />
      </Wrapper>
      <img src={props.imageSrc} />
      <Wrapper
        className={styles.textWrapper}
        size={"standard"}
        >
        <Typography
          className={styles.caption}
          type={"ingressTitle"}
          >
          {props.caption}
        </Typography>
        <Typography
          className={styles.explanation}
          type={"caption2Normal"}
          >
          {props.explanation}
        </Typography>
      </Wrapper>
    </div>
  );
}

export default ChallengeEventCardTeamNewLevel;
