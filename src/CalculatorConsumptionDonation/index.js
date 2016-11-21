import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import CounterInputGeneral from '../CounterInputGeneral';

const PropTypes = React.PropTypes;

function CalculatorConsumptionDonation(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper size={'standard'}>
        <Typography type={'bodyTextNormal'}>
          {'Hvor mye donerer du til gode formål? (Gjennomsnitt per måned)'}
        </Typography>
      </Wrapper>
      <Wrapper
        className={styles.countersWrapper}
        size={'standard'}
        >
        <CounterInputGeneral
          decreaseValue={props.donationValueDecreased}
          increaseValue={props.donationValueIncreased}
          label={'NOK (kroner)'}
          resultNumber={props.donationValue}
          />
      </Wrapper>
    </div>
  );
}

CalculatorConsumptionDonation.propTypes = {
  className: PropTypes.string,
  donationValue: PropTypes.number,
  donationValueDecreased: PropTypes.func,
  donationValueIncreased: PropTypes.func
};

export default CalculatorConsumptionDonation;
