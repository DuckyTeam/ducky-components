import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

import Wrapper from '../Wrapper';
import Typography from '../Typography';
import TeamHeader from '../TeamHeader';
import LabelSmall from '../LabelSmall';

function ChallengeEventCardTeamRankingChanged(props) {

  const getArrow = () => {
    if (props.sinceYesterday < 0) {
      return "icon-arrow_downward";
    } else if (props.sinceYesterday > 0) {
      return "icon-arrow_upward";
    } else {
      return "icon-arrow_forward";
    }
  }

  return (
    <div
      className={classNames(styles.wrapper, props.className)}
      >
      <Wrapper
        size={"standard"}
        >
        <TeamHeader
          className={styles.TeamHeader}
          place={props.place}
          teamName={props.teamName}
          time={props.time}
        />
      </Wrapper>
      <Wrapper
        className={props.sinceYesterday < 0 ? styles.textWrapperDecreased : styles.textWrapperIncreased}
        size={"standard"}
        >
        <Typography
          className={props.sinceYesterday < 0 ? styles.textDecreased : styles.textIncreased}
          type={"caption2Normal"}
          >
          {props.newPlacementCaption}
        </Typography>
        <Typography
          className={props.sinceYesterday < 0 ? styles.textBigDecreased : styles.textBigIncreased}
          type={"ingressTitle"}
          >
          {props.placementChangeCaption}
        </Typography>
      </Wrapper>
      <Wrapper
        className={styles.arrowWrapper}
        size={"standard"}
        >
        <LabelSmall
          typhographyClass={props.arrowTypo}
          iconClass={props.sinceYesterday < 0 ? styles.arrowDecreased : styles.arrowIncreased}
          icon={getArrow()}
          content={props.arrowCaption}
        />
      </Wrapper>
    </div>
  );
}

ChallengeEventCardTeamRankingChanged.propTypes = {
    className: PropTypes.string
};

export default ChallengeEventCardTeamRankingChanged;
