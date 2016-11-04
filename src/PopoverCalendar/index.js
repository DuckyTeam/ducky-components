import React from 'react';
import moment from 'moment';
import 'moment/locale/nb';
// import 'moment/locale/de';
// import 'moment/locale/is'; */
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
      language: this.props.language
    };

    console.log('thispropslanguage: ', this.props.language);
    console.log('duckyCalendar: ', duckyCalendar);
  }

/*
  // Days in week constructor:

  structDays = function() {
    const thisIsTheDays = [M,T,O,T,F,L,S];
    let index = 0;
    const Day = thisIsTheDays[index];
    const daysInWeek = thisIsTheDays.length;
*/

  structDays() {
    let norsk = moment;

    norsk.locale(this.props.language);
    let monthWidth = norsk().daysInMonth();
    let monthz = this.props.month ? this.props.month : norsk.months();
    let startOfMonth = norsk().month(monthz).startOf('month').format('d');
    console.log(monthz);
    console.log('monthwidth: ', monthWidth, 'start of month: ', startOfMonth);
    let emptybox = [];
    let firstweek = '<div> do this later..';
  }

  structYear() {
    let norsk = moment;
    let yearz = this.props.year ? this.props.year : norsk().year();
    console.log('yearz: ', yearz);
    return yearz;
  }

  structMonth(inx) {
    let norsk = moment;
    let inx2 = inx-1;

    norsk.locale(this.props.language ? this.props.language : 'nb');
    const monthz = norsk.months();

    console.log('monthz: ', monthz[inx2]);
    return monthz[inx2];
  }

  structWeek() {
    let weekz = [];

    let norsk = moment;
      // dNow = '01_11_2016';

      // norsk.locale(this.props.language);
      // mIS.locale("is");
      // mDE.locale("de");
      norsk.locale(this.props.language ? this.props.language : 'nb');
      console.log('locale is: ', norsk.locale())


    // console.log('momentlocale??: ', moment.locale());
    // var format = "ll";
    // var locale = "de";
    weekz = norsk.weekdaysMin();

    console.log('moment locale week test: ', moment.weekdays(), weekz);
    // console.log('moment locale lang test: ', mDE().fromNow());

    // moment.locale('de');
    console.log('moment locale norsk weekdays: ', norsk.weekdaysShort());
    /* console.log('moment locale test3: ', moment().months());
    console.log('start of week:', moment().startOf(weekz).toString());
    console.log('end of week: ', moment().endOf(weekz).toString());
    console.log('momentlocale??: ', moment.locale());

    console.log('week/moment.months: ', weekz, mIS().weekdaysShort);


    console.log('days in week: ', daysInWeek); */

    const theSunday = weekz[0];

    weekz.splice(0, 1);
    weekz.push(theSunday);
    const daysInWeek = weekz.length;
    const rows = [];


    for (let index = 0; index < daysInWeek; index += 1) {
      rows.push(<ButtonCounter className={styles.icon}
        number={weekz[index].toUpperCase()}
        />);
    }
    console.log('rows: ', {rows})
    return (<Wrapper className={styles.iconWrapper}
      size="slender"
      >
      {rows}
    </Wrapper>);
  }
  render() {
    const arrowLeft = 'icon-arrow_back';
    const arrowRight = 'icon-arrow_forward';

    return (
      <Wrapper className={classNames(styles.wrapper, {[this.props.className]: this.props.className})}
        size="standard"
        >
        <div>
          <ActionButton className={styles.iconArrows}
            icon={arrowLeft}
            />
          <Typography className={styles.month}> {this.structMonth(this.props.month ? this.props.month : 1)} </Typography>
          <Typography className={styles.year}> {this.structYear()} </Typography>
          <ActionButton className={styles.iconArrows}
            icon={arrowRight}
            />
        </div>
        <div><Spacer size="double" /></div>
        <div>
          {this.structWeek()}
        </div>
        <div>
          {this.structDays()}
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
  month: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  onClick: React.PropTypes.func,
  // style: React.PropTypes.shape({}),
  structWeek: React.PropTypes.func,
  year: React.PropTypes.number

};
export default PopoverCalendar;
