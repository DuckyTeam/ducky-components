import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressBar from '../ProgressBar';
import LabelSmall from '../LabelSmall';
import Spacer from '../Spacer';
import Tooltip from '../Tooltip';
import Typography from '../Typography';
import styles from './styles.css';

function CalculatorLabel1(props) {
  const goalPosition = (props.goalValue / props.maxValue) * 100;
  const progressPercent = (props.value / props.maxValue) * 100;

  return (
    <Tooltip
      placement="top"
      text={props.toolTipText}
      >
      <div className={props.size === 'wide' ? styles.wrapper_wide : styles.wrapper_standard}>
        <ProgressBar
          className={classNames(styles.progressBar)}
          color={props.barColor}
          percent={progressPercent}
          size={props.size || "standard"}
          >
          <div className={classNames(styles.progressWrapper)}>
            <Spacer size="standard" />
            {props.valueDescription
              ? <div className={classNames(styles.metaWrapper)}>
                <LabelSmall
                  className={classNames(styles.labelCurrent)}
                  content={props.value}
                  icon={props.iconCurrent}
                  onclick={props.onClickCo2}
                  />
                <Typography
                  className={classNames(styles.caption)}
                  type="caption2Normal"
                  >
                  {props.valueDescription}
                </Typography>
              </div>
              : null
            }
            <div
              className={classNames(styles.goalMarkerWrapper)}
              style={{left: `${goalPosition}%`}}
              >
              <div
                className={classNames(styles.goalMarker, {
                  [styles.goalMarkerStandard]: props.size === "standard" || !props.size,
                  [styles.goalMarkerWide]: props.size === "wide"
                })}
                />
              <Spacer size="standard" />
              <LabelSmall
                className={classNames(styles.goalLabel)}
                content={props.goalValue}
                icon={props.iconGoal}
                onclick={props.onClickGoal}
                />
            </div>
          </div>
        </ProgressBar>
      </div>
    </Tooltip>
  );
}

CalculatorLabel1.propTypes = {
  barColor: PropTypes.string,
  goalValue: PropTypes.number,
  iconCurrent: PropTypes.string,
  iconGoal: PropTypes.string,
  maxValue: PropTypes.number,
  onClickCo2: PropTypes.func,
  onClickGoal: PropTypes.func,
  size: PropTypes.oneOf(['standard', 'wide']),
  toolTipText: PropTypes.string,
  value: PropTypes.number,
  valueDescription: PropTypes.string
};

export default CalculatorLabel1;
