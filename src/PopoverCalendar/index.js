import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
// import Popup from '../Popup';
import ActionButton from '../ActionButton';
import Typography from '../Typography';
import ButtonCounter from '../ButtonCounter';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import styles from './styles.css';

class PopoverCalendar extends React.component {
  Constructor(props) {
    super(props);
    const duckyCalendar = {
      Language: moment.locale(this.props.language)
    };

    this.console.log(this.props.language);
  }

/*
  // Days in week constructor:

  structDays = function() {
    const thisIsTheDays = [M,T,O,T,F,L,S];
    let index = 0;
    const Day = thisIsTheDays[index];
    const daysInWeek = thisIsTheDays.length;
*/
  structWeek() {
    const daysInWeek = moment().isoMonths().lenght();

    for (index; index <= daysInWeek; index += 1) {
      return (<Wrapper size="slender"><ButtonCounter number={this.days.inWeek[index]} /></Wrapper>);
    }
  }
  render() {
    const arrowLeft = 'icon-arrow_back';
    const arrowRight = 'icon-arrow_forward';

    return (
      <Wrapper className={classNames(styles.wrapper, {[this.props.className]: this.props.className})}
        size="standard"
        >
        <div>
          <ActionButton className={styles.icon}
            icon={arrowLeft}
            />
          <Typography className={styles.month}> {this.props.month} </Typography>
          <Typography className={styles.year}> {this.props.year} </Typography>
          <ActionButton className={styles.icon}
            icon={arrowRight}
            />
        </div>
        <br />
        <div><Spacer size="double" /></div>
        <div>
          <Wrapper size="slender"><ButtonCounter number="M" /></Wrapper>
          <Wrapper size="slender"><ButtonCounter number="T" /></Wrapper>
          <Wrapper size="slender"><ButtonCounter number="O" /></Wrapper>
          <Wrapper size="slender"><ButtonCounter number="T" /></Wrapper>
          <Wrapper size="slender"><ButtonCounter number="F" /></Wrapper>
          <Wrapper size="slender"><ButtonCounter number="L" /></Wrapper>
          <Wrapper size="slender"><ButtonCounter number="S" /></Wrapper>
        </div>
      </Wrapper>
    );
  }

  /* !!Just temporary made the bunch of buttonCounters manually, cause struct function will be have to be done different */
}
PopoverCalendar.propTypes = {
  // arrowLeft: React.PropTypes.shape(icon-arrow_back),
  // arrowRight: React.PropTypes.shape(icon-arrow_forward),
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  language: React.PropTypes.string,
  color: React.PropTypes.string,
  month: React.PropTypes.string,
  onClick: React.PropTypes.func,
  // style: React.PropTypes.shape({}),
  structWeek: React.PropTypes.func,
  year: React.PropTypes.number

};
export default PopoverCalendar;
