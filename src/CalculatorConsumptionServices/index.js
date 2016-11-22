import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorConsumptionServices(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Velger du tjenester framfor produkter?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Prøver alltid å velge tjenester'}
            label={'Prøver alltid å velge tjenester'}
            onClick={props.onAlwaysSelected}
            />
          <RadioButton
            checked={props.selected === 'Foretrekker tjenester'}
            label={'Foretrekker tjenester'}
            onClick={props.onPreferSelected}
            />
          <RadioButton
            checked={props.selected === 'Vet ikke'}
            label={'Vet ikke'}
            onClick={props.onDontKnowSelected}
            />
          <RadioButton
            checked={props.selected === 'Elsker å kjøpe stæsj!'}
            label={'Elsker å kjøpe stæsj!'}
            onClick={props.onLoveTobuySelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om etiske produkter og tjenester, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorConsumptionServices.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAlwaysSelected: PropTypes.func,
  onDontKnowSelected: PropTypes.func,
  onLoveTobuySelected: PropTypes.func,
  onPreferSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorConsumptionServices;
