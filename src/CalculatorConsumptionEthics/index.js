import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorConsumptionEthics(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvor ofte velger du etisk og miljøvennlig?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Prøver alltid å finne etisk alternativ!'}
            label={'Prøver alltid å finne etisk alternativ!'}
            onClick={props.onAlwaysSelected}
            />
          <RadioButton
            checked={props.selected === 'Som oftest'}
            label={'Som oftest'}
            onClick={props.onOftenSelected}
            />
          <RadioButton
            checked={props.selected === 'Av og til'}
            label={'Av og til'}
            onClick={props.onOccasionallySelected}
            />
          <RadioButton
            checked={props.selected === 'Hva er etisk og miljøvennli?'}
            label={'Hva er etisk og miljøvennli?'}
            onClick={props.onWhatIsEthicalSelected}
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

CalculatorConsumptionEthics.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAlwaysSelected: PropTypes.func,
  onOccasionallySelected: PropTypes.func,
  onOftenSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onWhatIsEthicalSelected: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorConsumptionEthics;
