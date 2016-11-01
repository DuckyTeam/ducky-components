import ActionItemSelectComposit from '../ActionItemSelectComposit';
import Wrapper from '../Wrapper';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function CreateGoalActionItem(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      size={'short'}
      >
      <div className={styles.actionItemComposite}>
        <ActionItemSelectComposit
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
