import React from 'react';
import classNames from 'classnames';
// import Popup from '../Popup';
import ActionButton from '../ActionButton';
import Typography from '../Typography';
// import ButtonCounter from '../ButtonCounter';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import styles from './styles.css';

function PopoverCalendar(props) {
  let arrowLeft = 'icon-arrow_back';
  let arrowRight = 'icon-arrow_forward';
  // let text = "text her";

  return (
    <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
      size="standard"
      >
      <ActionButton className={styles.icon}
        icon={arrowLeft}
        />
      <Typography> {props.children} </Typography>
      <ActionButton className={styles.icon}
        icon={arrowRight}
        />
      <Spacer size="double" />
    </Wrapper>
  );
}

PopoverCalendar.propTypes = {
  // arrowLeft: React.PropTypes.shape(icon-arrow_back),
  // arrowRight: React.PropTypes.shape(icon-arrow_forward),
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  onClick: React.PropTypes.func,
  // style: React.PropTypes.shape({}),
  text: React.PropTypes.string

};
export default PopoverCalendar;
