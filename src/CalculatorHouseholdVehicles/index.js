import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Spacer from '../Spacer';
import CounterInputGeneral from '../CounterInputGeneral';

const PropTypes = React.PropTypes;

function CalculatorHouseholdVehicles(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper size={'standard'}>
        <Typography type={'bodyTextNormal'}>
          {'Hvor mange kjøretøy har husholdningen?'}
        </Typography>
      </Wrapper>
      <Wrapper
        className={styles.countersWrapper}
        size={'standard'}
        >
        <CounterInputGeneral
          decreaseValue={props.electricValueDecreased}
          increaseValue={props.electricValueIncreased}
          value={props.electricValue}
          valueType={'Elektrisk bil'}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.hybridValueDecreased}
          increaseValue={props.hybridValueIncreased}
          value={props.hybridValue}
          valueType={'Hybridbil'}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.petrolDieselValueDecreased}
          increaseValue={props.petrolDieselValueIncreased}
          value={props.petrolDieselValue}
          valueType={'Bensin- eller dieselbil'}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.motorcycleValueDecreased}
          increaseValue={props.motorcycleValueIncreased}
          value={props.motorcycleValue}
          valueType={'Motorsykkel'}
          />
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdVehicles.propTypes = {
  className: PropTypes.string,
  electricValue: PropTypes.number,
  electricValueDecreased: PropTypes.func,
  electricValueIncreased: PropTypes.func,
  hybridValue: PropTypes.number,
  hybridValueDecreased: PropTypes.func,
  hybridValueIncreased: PropTypes.func,
  motorcycleValue: PropTypes.number,
  motorcycleValueDecreased: PropTypes.func,
  motorcycleValueIncreased: PropTypes.func,
  petrolDieselValue: PropTypes.number,
  petrolDieselValueDecreased: PropTypes.func,
  petrolDieselValueIncreased: PropTypes.func
};

export default CalculatorHouseholdVehicles;
