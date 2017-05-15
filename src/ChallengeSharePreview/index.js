import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import LabelSmall from '../LabelSmall';
import className from 'classnames';
import styles from './styles.css';


function ChallengeSharePreview(props) {
  return (
    <Wrapper
      className={className(styles.mainWrapper)}
      size="standard"
      >
      <div
        className={className(styles.imageChallengeShare)}
        style={{backgroundImage: `url(${props.backgroundImgUrl})`}}
        />
      <Wrapper
        className={className(styles.innerWrapper)}
        size="standard"
        >
        <Typography
          className={className(styles.challengeTitle)}
          type="ingressStrong"
          >
          {props.challengeTitle}
        </Typography>
        <Typography
          className={className(styles.challengeTagline)}
          type="caption2Normal"
          >
          {props.challengeTagline}
        </Typography>
        <div className={className(styles.bottomWrapper)}>
          <Typography className={className(styles.bottomDates)}>
            {props.dateFromTo}
          </Typography>
          <LabelSmall
            className={className(styles.bottomLabel)}
            content={props.labelContent}
            icon={props.icon || "icon-people"}
            typographyType={props.typoType || "caption2Normal"}
            />
        </div>
      </Wrapper>
    </Wrapper>
  );
}

ChallengeSharePreview.propTypes = {
  backgroundImgUrl: PropTypes.tring,
  challengeTagline: PropTypes.string,
  challengeTitle: PropTypes.string,
  className: PropTypes.string,
  dateFromTo: PropTypes.string,
  icon: PropTypes.string,
  labelContent: PropTypes.string,
  typoType: PropTypes.string
};

export default ChallengeSharePreview;
