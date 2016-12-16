import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import IconAvaWrapper from '../IconAvaWrapper';
import Spacer from '../Spacer';
import CounterInputGeneral from '../CounterInputGeneral';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function CalculatorHouseholdEnergyShower(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={classNames(styles.titleandiconWrap)}
        size={'standard'}
        >
        <Typography type={'bodyTextNormal'}>
          {props.energyshowerQuestion}
        </Typography>
        <IconAvaWrapper
          className={classNames(styles.icon)}
          icon={props.icon}
          onClick={props.handleToggleShowerinfo}
          />
      </Wrapper>
      <Wrapper
        className={styles.countersWrapper}
        size={'standard'}
        >
        <CounterInputGeneral
          decreaseValue={props.numberShowerValueDecreased}
          increaseValue={props.numberShowerValueIncreased}
          label={props.numberShowerText}
          resultNumber={props.numberShowerValue}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.durationShowerValueDecreased}
          increaseValue={props.durationShowerValueIncreased}
          label={props.durationShowerText}
          resultNumber={props.durationShowerValue}
          />
        <Spacer size={'standard'} />
        {props.toggledInfo
        ? <Typography>
          {props.showerInfotext}
        </Typography>
        : null}
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdEnergyShower.propTypes = {
  className: PropTypes.string,
  durationShowerText: PropTypes.string,
  durationShowerValue: PropTypes.string,
  durationShowerValueDecreased: PropTypes.func,
  durationShowerValueIncreased: PropTypes.func,
  energyshowerQuestion: PropTypes.string,
  handleToggleShowerinfo: PropTypes.func,
  icon: PropTypes.string,
  numberShowerText: PropTypes.string,
  numberShowerValue: PropTypes.number,
  numberShowerValueDecreased: PropTypes.func,
  numberShowerValueIncreased: PropTypes.func,
  showerInfotext: PropTypes.string,
  toggledInfo: PropTypes.bool
};

export default CalculatorHouseholdEnergyShower;
