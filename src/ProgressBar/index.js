import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBar(props) {
  const optBackground = (
    <div
      className={classNames(styles.inactive, styles[props.size])}
      />
  );

  const goalPosition = (props.value / props.maxValue) * 100;

  return (
    <div
      className={classNames(styles.wrapper, props.className, styles[props.size])}
      onClick={props.onClick}
      >
       {(props.percent > 0)
         ? <div
           className={classNames(styles.progress, styles[props.size])}
           goal={props.goal}
           style={{width: `${props.percent}%`, backgroundColor: props.color}}
           >
           {props.goal
           ? <span
             className={classNames(styles.goalMarker, {
               [styles.goalMarkerStandard]: props.size === "standard",
               [styles.goalMarkerWide]: props.size === "wide"
             })}
             maxvalue={props.maxValue}
             value={props.value}
             style={{left: `${goalPosition}%`}}
             // style={{left: `${props.goal}`}} // can maybe be used when setting goal, remove css:right is using this
             // use Element.clientWidth?
             // goal in numbervalue, progress in percent of px, clientWidth=max width in px
             />
             : null}
         </div>
        : optBackground}
    </div>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  color: React.PropTypes.shape({}),
  goal: React.PropTypes.string,
  maxValue: PropTypes.number,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  size: PropTypes.oneOf(['standard', 'wide']),
  value: PropTypes.number
};

export default ProgressBar;
