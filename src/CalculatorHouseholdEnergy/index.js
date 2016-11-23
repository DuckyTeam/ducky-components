import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Spacer from '../Spacer';
import CounterInputGeneral from '../CounterInputGeneral';
import CalculatorGeneralItem from '../CalculatorGeneralItem';

const PropTypes = React.PropTypes;

function CalculatorHouseholdEnergy(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper size={'standard'}>
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Vil du justere estimatet for årlig strømforbruk?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          units={'kWh'}
          value={props.energyValue}
          >
          <CounterInputGeneral
            decreaseValue={props.energyValueDecreased}
            increaseValue={props.energyValueIncreased}
            label={'Strømforbruk'}
            resultNumber={props.energyValue}
            units={'kWh'}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om hvordan du kan finne ut av strømforbruk.'}
          </Typography>
          <Spacer size={'double'} />
        </CalculatorGeneralItem>
        <Spacer size={'double'} />
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdEnergy.propTypes = {
  className: PropTypes.string,
  energyValue: PropTypes.number,
  energyValueDecreased: PropTypes.func,
  energyValueIncreased: PropTypes.func,
  expanded: PropTypes.bool,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdEnergy;
