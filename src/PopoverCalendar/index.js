import React from 'react';
import moment from 'moment';
import 'moment/locale/nb';
// import 'moment/locale/de';
// import 'moment/locale/is'; */
/* "Linking the nb.js in my main project file automatically changed the locale for all accesses to the moment class and its methods.
There will be no need anymore to do a moment.locale("nb"). or moment.lang("nb"). in the source code." -!(just working as a fallback in this case)! */
import classNames from 'classnames';
import Popup from '../Popup';
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

    // console.log('thispropslanguage: ', this.props.language);
    // console.log('duckyCalendar: ', duckyCalendar);
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
    const norsk = moment;

    norsk.locale(this.props.language);
    const month = norsk.months();
    const yearz = this.props.year ? this.props.year : norsk().year();
    const monthz = this.props.month;
    const now = yearz + '_' + monthz;
    const monthWidth = norsk(now, "YYYY_M").daysInMonth();
    const startOfMonth = norsk(now, "YYYY_M").startOf('month').format('d');
    let numberOfBlanks1 = startOfMonth - 1;

    console.log('monthz: ', monthz);
    console.log('month: ', month);

    console.log('monthwidth: ', monthWidth, 'tempcalc: ', startOfMonth, 'start of month/ number of blanks: ', numberOfBlanks1);
    const bigBox = [];

    for (let inx2 = 0; numberOfBlanks1 > inx2; numberOfBlanks1 -= 1) {
      bigBox.push(
        <Wrapper className={styles.iconWrapper}
          size="slender"
          >
          <ButtonCounter className={styles.icon}
            number=" "
            />
        </Wrapper>);
    }
      // bigBox.push();
    for (let inx = 0; inx < monthWidth; inx += 1) {
      bigBox.push(
        <Wrapper className={styles.iconWrapper}
          size="slender"
          >
          <ButtonCounter className={styles.icon}
            number={inx + 1}
            />
        </Wrapper>);
    }
    console.log(bigBox);
    // Slice them in 5 parts so they allways align!
    const firstWeek = bigBox.slice(0, 7);
    const secWeek = bigBox.slice(7, 14);
    const d3Week = bigBox.slice(14, 21);
    const th4Week = bigBox.slice(21, 28);
    const th5Week = bigBox.slice(28, 35);
    let lastBlanks = 42 - bigBox.length;

    for (let inx2 = 0; lastBlanks > inx2; lastBlanks -= 1) {
      bigBox.push(
        <Wrapper className={styles.iconWrapper}
          size="slender"
          >
          <ButtonCounter className={styles.icon}
            number=" "
            />
        </Wrapper>);
    }

    const lastWeek = bigBox.slice(35, 42);

    // console.log(firstWeek);

    return (<div><div>{firstWeek}</div>
      <div>{secWeek}</div>
      <div>{d3Week}</div>
      <div>{th4Week}</div>
      <div>{th5Week}</div>
      <div>{lastWeek}</div></div>);
  }

  structYear() {
    const norsk = moment;
    const yearz = this.props.year ? this.props.year : norsk().year();

    return yearz;
  }

  structMonth(inx) {
    const norsk = moment;
    const inx2 = inx - 1;

    norsk.locale(this.props.language ? this.props.language : 'nb');
    const monthz = norsk.months();

    // console.log('monthz: ', monthz[inx2]);
    return monthz[inx2];
  }

  structWeek() {
    let weekz = [];

    const norsk = moment;
      // dNow = '01_11_2016';

      // norsk.locale(this.props.language);
      // mIS.locale("is");
      // mDE.locale("de");
    norsk.locale(this.props.language ? this.props.language : 'nb');
    // console.log('locale is: ', norsk.locale())


    // console.log('momentlocale??: ', moment.locale());
    // var format = "ll";
    // var locale = "de";
    weekz = norsk.weekdaysMin();

    // console.log('moment locale week test: ', moment.weekdays(), weekz);
    // console.log('moment locale lang test: ', mDE().fromNow());

    // moment.locale('de');
    // console.log('moment locale norsk weekdays: ', norsk.weekdaysShort());
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
      rows.push(<Wrapper className={styles.iconWrapper}
        size="slender"
        >
        <ButtonCounter className={styles.icon}
          number={weekz[index].toUpperCase()}
          />
      </Wrapper>
      );
    }
    // console.log('rows: ', {rows})
    return (<div>
      {rows}
    </div>);
  }
  render() {
    const arrowLeft = 'icon-arrow_back';
    const arrowRight = 'icon-arrow_forward';

    return (
      <Popup>
        <Wrapper className={classNames(styles.wrapper, {[this.props.className]: this.props.className})}
          size="standard"
          >
          <div className={styles.topDiv}>
            <Wrapper className={styles.leftarrow}>
              <ActionButton className={styles.iconArrows}
                icon={arrowLeft}
                />
            </Wrapper>
            <Typography className={styles.month}
              type="ingressTitle"
              >
              {this.structMonth(this.props.month ? this.props.month : 1)}
            </Typography>
            <Typography className={styles.year}
              type="ingressTitle"
              >
              {this.structYear()}
            </Typography>
            <Wrapper className={styles.rightarrow}>
              <ActionButton className={styles.iconArrows}
                icon={arrowRight}
                />
            </Wrapper>
          </div>
          <div><Spacer size="double" /></div>
          <div>
            {this.structWeek()}
          </div>
          <div>
            {this.structDays()}
          </div>
        </Wrapper>
      </Popup>
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
