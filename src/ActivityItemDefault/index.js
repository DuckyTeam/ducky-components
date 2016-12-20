import ListCompositeActivity from '../ListCompositeActivity';
import LogButton from '../LogButton';
import ActionButton from '../ActionButton';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ActionItemDefault(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <div className={styles.composite}>
        <ListCompositeActivity
          co2={props.co2}
          icon={props.iconSVG}
          points={props.points}
          title={props.title}
          />
      </div>
      <div className={styles.compositeButton}>
        <ActionButton
          className={styles.actionButton}
          icon={'icon-dots-vertical'}
          onClick={props.onActionClick}
          size={'standard'}
          />
        <LogButton
          icon={props.logIcon}
          className={styles.logButton}
          onClick={props.onLogClick}
          />
      </div>
    </div>
  );
}

ActionItemDefault.propTypes = {
  className: PropTypes.string,
  co2: PropTypes.number,
  iconSVG: PropTypes.string,
  logIcon: PropTypes.string,
  onActionClick: PropTypes.func,
  onLogClick: PropTypes.func,
  points: PropTypes.number,
  title: PropTypes.string
};

export default ActionItemDefault;
