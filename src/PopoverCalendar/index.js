import React from 'react';
import moment from 'moment';
import norsk from 'moment/locale/nb';
/* Linking the nb.js in my main project file automatically changed the locale for all accesses to the moment class and its methods.
There will be no need anymore to do a moment.locale("nb"). or moment.lang("nb"). in the source code. */
import classNames from 'classnames';
// import Popup from '../Popup';
import ActionButton from '../ActionButton';
import Typography from '../Typography';
import ButtonCounter from '../ButtonCounter';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import styles from './styles.css';

class PopoverCalendar extends React.Component {
  constructor(props) {
    super(props);
    const duckyCalendar = {
      Language: this.props.language
    };
    // let norsk = moment.locale("de").format("LLL");


    console.log('thispropslanguage: ', this.props.language);
    console.log('duckyCalendar: ', duckyCalendar);
    // console.log('current locale:', moment.localeData());
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
    let week = [];
    moment.format('ll');
    // moment.locale("de").format("LLL");
    console.log(moment.startOf('week'));
    week = moment.weekdays();
    console.log('week/moment.months: ', week, moment.weekdaysShort);
    const daysInWeek = week.length;

    console.log('days in week: ', daysInWeek);
    const rows = [];


    for (let index = 0; index < daysInWeek; index += 1) {
      rows.push(<ButtonCounter number={daysInWeek[index]} />
      );
    }
    return (<Wrapper size="slender">{rows}</Wrapper>);
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
        <div><Spacer size="double" /></div>
        <div>
          {this.structWeek()}
        </div>
      </Wrapper>
    );
  }

}
PopoverCalendar.propTypes = {
  // arrowLeft: React.PropTypes.shape(icon-arrow_back),
  // arrowRight: React.PropTypes.shape(icon-arrow_forward),
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  language: React.PropTypes.string,
  // color: React.PropTypes.string,
  month: React.PropTypes.string,
  onClick: React.PropTypes.func,
  // style: React.PropTypes.shape({}),
  structWeek: React.PropTypes.func,
  year: React.PropTypes.number

};
export default PopoverCalendar;
