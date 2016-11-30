import React from 'react';
import classNames from 'classnames';
import ProgressBar from '../ProgressBar';
import LabelSmall from '../LabelSmall';
import Spacer from '../Spacer';
import Tooltip from '../Tooltip';
import Typography from '../Typography';
import styles from './styles.css';

function CalculatorLabel1(props) {
  return (
    <Tooltip
      placement="top"
      text={props.toolTipText}
      >
      <ProgressBar
        className={classNames(styles.progressBar)}
        goal={props.goal}
        percent={props.progressBarPercent}
        size="wide"
        />
      <Spacer size="standard" />
      <div className={classNames(styles.progressWrapper)}>
        <div className={classNames(styles.metaWrapper)}>
          <LabelSmall
            className={classNames(styles.labelCurrent)}
            content={props.contentCurrent}
            icon={props.iconCurrent}
            onclick={props.onClickCo2}
            />
          <Typography
            className={classNames(styles.caption)}
            type="caption2Normal"
            >
            {'kgCO2e'}
          </Typography>
        </div>
        <LabelSmall
          className={classNames(styles.goalLabel)}
          content={props.contentGoal}
          icon={props.iconGoal}
          onclick={props.onClickGoal}
          />
      </div>
    </Tooltip>
  );
}

CalculatorLabel1.propTypes = {
  contentCurrent: React.PropTypes.string,
  contentGoal: React.PropTypes.string,
  goal: React.PropTypes.string,
  iconCurrent: React.PropTypes.string,
  iconGoal: React.PropTypes.string,
  onClickCo2: React.PropTypes.func,
  onClickGoal: React.PropTypes.func,
  progressBarPercent: React.PropTypes.number,
  toolTipText: React.PropTypes.string
};

export default CalculatorLabel1;
