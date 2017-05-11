import ActivityItemSelectComposite from '../ActivityItemSelectComposite';
import Wrapper from '../Wrapper';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function CreateGoalActionItem(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      size={'short'}
      >
      <div className={styles.actionItemComposite}>
        <ActivityItemSelectComposite
          co2={props.co2}
          icon={props.icon}
          onClick={props.onClick}
          points={props.points}
          title={props.title}
          />
      </div>
    </Wrapper>
  );
}

CreateGoalActionItem.propTypes = {
  className: PropTypes.string,
  co2: PropTypes.number,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  points: PropTypes.number,
  title: PropTypes.string
};

export default CreateGoalActionItem;
