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
          label={'Elektrisk bil'}
          resultNumber={props.electricValue}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.hybridValueDecreased}
          increaseValue={props.hybridValueIncreased}
          label={'Hybridbil'}
          resultNumber={props.hybridValue}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.petrolDieselValueDecreased}
          increaseValue={props.petrolDieselValueIncreased}
          label={'Bensin-eller dieselbil'}
          resultNumber={props.petrolDieselValue}
          />
        <Spacer size={'double'} />
        <CounterInputGeneral
          decreaseValue={props.motorcycleValueDecreased}
          increaseValue={props.motorcycleValueIncreased}
          label={'Motorsykkel'}
          resultNumber={props.motorcycleValue}
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
