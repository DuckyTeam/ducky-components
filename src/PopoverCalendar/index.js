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
    /* this.dayZ = {
      IDdate: [],
      State: [],
      Content: [],
      number: []
      // onClick: selectionHandler(this.number),
    };
    */
  }
    // console.log('thispropslanguage: ', this.props.language);

  structDays() {
    const norsk = moment;

    norsk.locale(this.props.language);
    const month = norsk.months();
    const yearz = this.props.year ? this.props.year : norsk().year();
    const monthz = this.props.month;
    const yearMonth = yearz + '_' + monthz;
    const monthWidth = norsk(yearMonth, "YYYY_M").daysInMonth();
    const startOfMonth = norsk(yearMonth, "YYYY_M").startOf('month').format('d');
    let numberOfBlanks1 = startOfMonth - 1;

    // hvordan få dette objektet brukbart for onDayClick() ?? ('>_ <)7
    const dayZ = {
      IDdate: [],
      State: [],
      Content: [],
      number: []
      // onClick: selectionHandler(this.number),
    };

    console.log('monthz: ', monthz);
    console.log('month: ', month);

    console.log('monthwidth: ', monthWidth, 'tempcalc: ', startOfMonth, 'start of month/ number of blanks: ', numberOfBlanks1);

    // this is where all the pre blanks get pushed in //
    for (let inx2 = 0; numberOfBlanks1 > inx2; numberOfBlanks1 -= 1) {
      dayZ.number.push("");
      dayZ.Content.push(
        <Wrapper className={styles.iconWrapper}
          size="slender"
          >

          <ButtonCounter className={styles.icon}
            number=""
            />
        </Wrapper>);
    }
      // This is where all the days get pushed in.//
      // //////////////////////////////////////////
    for (let inx = 0; inx < monthWidth; inx += 1) {
      dayZ.number.push(inx + 1);
      dayZ.State.push(1);
      const zeDay = inx + 1;

      dayZ.IDdate.push(yearz + '_' + monthz + '_' + zeDay);
      const onClick = this.props.onDayClick.bind(null, inx);

      dayZ.Content.push(
        <Wrapper className={styles.iconWrapper}
          onClick={onClick}
          size="slender"
          >
          <ButtonCounter className={styles.icon}
            number={inx + 1}
            />
        </Wrapper>);
    }
    console.log(dayZ);
    // Slice them in 6 parts so they allways align! //
    // //////////////////////////////////////////////
    const firstWeek = dayZ.Content.slice(0, 7);
    const secWeek = dayZ.Content.slice(7, 14);
    const d3Week = dayZ.Content.slice(14, 21);
    const th4Week = dayZ.Content.slice(21, 28);
    const th5Week = dayZ.Content.slice(28, 35);
    let lastBlanks = 42 - dayZ.Content.length;

    // this is where the Post blanks get pushed in.//
    // /////////////////////////////////////////////
    for (let inx2 = 0; lastBlanks > inx2; lastBlanks -= 1) {
      dayZ.number.push("");
      dayZ.Content.push(
        <Wrapper className={styles.iconWrapper}
          size="slender"
          >
          <ButtonCounter className={styles.icon}
            number=""
            />
        </Wrapper>);
    }

    const lastWeek = dayZ.Content.slice(35, 42);

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

    norsk.locale(this.props.language ? this.props.language : 'nb');
    weekz = norsk.weekdaysMin();
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
  onDayClick(selection) {
    // State 0 = deactivated, State 1 = Selectable, State 2 = hasActivity, State 3 = Selected.
    console.log('yes runs');
    switch (this.dayZ.State[selection]) {
    case 1:
      this.dayZ.State[selection] = 3;
      this.dayZ.content[this.props.className] = styles.selectedStyle;
      console.log('this is className: ', this.dayZ.content[this.props.className]);
      break;
    case 2:
      this.dayZ.State[selection] = 3;
      this.dayZ.content[this.props.className] = styles.selectedStyle
      break;
    default:
      break;
    }

    this.dayZ.IDdate[selection]

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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  // hasActivity: React.Proptypes.bool,
  // isDisabled: React.PropTypes.bool,
  // isSelected: React.PropTypes.bool,
  onDayClick: React.PropTypes.func,
  language: React.PropTypes.string,
  month: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  onClick: React.PropTypes.func,
  structWeek: React.PropTypes.func,
  year: React.PropTypes.number

};
export default PopoverCalendar;


const foo = function (wop) {
  return function () {
    return "bar" + wop
  }
}("woop")

foo() // "bar"
