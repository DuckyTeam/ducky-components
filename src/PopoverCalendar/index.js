import React from 'react';
import classNames from 'classnames';
// import Popup from '../Popup';
import ActionButton from '../ActionButton';
import Typography from '../Typography';
import ButtonCounter from '../ButtonCounter';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import styles from './styles.css';

function PopoverCalendar(props) {
  let arrowLeft = 'icon-arrow_back';
  let arrowRight = 'icon-arrow_forward';

/*
  // Days in week constructor:

  structDays = function() {
    const thisIsTheDays = [M,T,O,T,F,L,S];
    let index = 0;
    const Day = thisIsTheDays[index];
    const daysInWeek = thisIsTheDays.length;

    for (daysInWeek; index <= daysInWeek; index += 1) {
      return (<Wrapper size="slender"><ButtonCounter number={Day} /></Wrapper>)
    }
  }
*/

  return (
    <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
      size="standard"
      >
      <div>
        <ActionButton className={styles.icon}
          icon={arrowLeft}
          />
        <Typography className={styles.month}> {props.month} </Typography>
        <Typography className={styles.year}> {props.year} </Typography>
        <ActionButton className={styles.icon}
          icon={arrowRight}
          />
      </div>
      <br />
      <div><Spacer size="double" /></div>
      <div>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="M" /></Wrapper>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="T" /></Wrapper>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="O" /></Wrapper>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="T" /></Wrapper>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="F" /></Wrapper>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="L" /></Wrapper>
        <Wrapper className={styles.bc}
          size="slender"
          >
          <ButtonCounter number="S" /></Wrapper>
      </div>
    </Wrapper>
  );

  /* !!Just temporary made the bunch of buttonCounters manually, cause struct function will be have to be done different */
}

PopoverCalendar.propTypes = {
  // arrowLeft: React.PropTypes.shape(icon-arrow_back),
  // arrowRight: React.PropTypes.shape(icon-arrow_forward),
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  month: React.PropTypes.oneOf(),
  onClick: React.PropTypes.func,
  // style: React.PropTypes.shape({}),
  structDays: React.PropTypes.func,
  year: React.PropTypes.number

};
export default PopoverCalendar;
