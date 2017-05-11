import React from 'react';
import PropTypes from 'prop-types';
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
  className: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.string,
  text: PropTypes.string
};

export default CreateGoalValueInput2;
