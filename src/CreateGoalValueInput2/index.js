import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import LabelHorisontal from '../LabelHorisontal';
import Typography from '../Typography';

function CreateGoalValueInput2(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      size="standard"
    >
      <LabelHorisontal
        icon={props.icon}
        text={props.text}
      />
      <Typography type="bodyTextNormal">
        {props.number}
      </Typography>
    </Wrapper>
  );
}

CreateGoalValueInput2.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  number: React.PropTypes.string,
  text: React.PropTypes.string
};

export default CreateGoalValueInput2;
