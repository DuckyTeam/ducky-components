import ProgressBar from '../ProgressBar';
import Typography from '../Typography';
import LabelSmall from '../LabelSmall';
import classNames from 'classnames';
import Spacer from '../Spacer';
import React from 'react';
import Tooltip from '../Tooltip';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeCardLabel1(props) {
  let pColor = '';
  let iconName = '';
  let typoText = '';
  let opt = '';
  let percentValue = props.percentValue > 0 ? props.percentValue : 0;

  if (props.type === 'points') {
    pColor = '#8BC34A';
    iconName = 'icon-brightness_high';
    typoText = props.pointsText;
  } else if (props.type === 'co2') {
    pColor = '#00AB97';
    iconName = 'icon-leaf';
    typoText = props.co2Text;
  } else if (props.type === 'activities') {
    pColor = '#0099A9';
    iconName = 'icon-check_circle';
    typoText = props.activityCountText;
  }

  if (props.goal) {
    opt = (
      <Typography
        className={styles.pad}
        type={'caption2Normal'}
        >
        {percentValue}{'%'}
      </Typography>
    );
  } else {
    opt = (
      <LabelSmall
        className={classNames(styles.labelSmall, {
          [styles.leader]: props.position === 1,
          [styles.user]: props.position !== 1
        })}
        content={props.position > 0 ? props.position : '-'}
        icon={props.position === 1 ? 'icon-crown' : 'icon-hashtag'}
        typographyType="caption2Strong"
        />
    );
  }
  return (
    <div>
      <Tooltip text="Din status">
        <ProgressBar
          color={pColor}
          percent={props.progPercent}
          size="standard"
          />
      </Tooltip>
      <Spacer size="standard" />
      <span className={styles.wrapper}>
        <LabelSmall
          className={classNames(styles.general, styles[props.type])}
          content={props.points > 0 ? props.points : '-'}
          icon={iconName}
          typographyType="caption2Strong"
          />
        <Typography
          className={styles.typoText}
          type="caption2Normal"
          >
          {typoText}
        </Typography>
        {opt}
      </span>
    </div>
  );
}


ChallengeCardLabel1.propTypes = {
  activityCountText: PropTypes.string,
  co2Text: PropTypes.string,
  goal: PropTypes.bool,
  percentValue: PropTypes.number,
  points: PropTypes.number,
  pointsText: PropTypes.string,
  position: PropTypes.number,
  progPercent: PropTypes.number,
  type: PropTypes.oneOf(['points', 'co2', 'activities'])
};
export default ChallengeCardLabel1;
