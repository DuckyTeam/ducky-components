import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdHeating(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvilken hoved-varmekilde bruker du?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Elektrisk'}
            label={'Elektrisk'}
            onClick={props.onElectricSelected}
            />
          <RadioButton
            checked={props.selected === 'Fjernvarme'}
            label={'Fjernvarme'}
            onClick={props.onCentralHeatingSelected}
            />
          <RadioButton
            checked={props.selected === 'Oljefyr'}
            label={'Oljefyr'}
            onClick={props.onOilSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om varmekilder, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdHeating.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onCentralHeatingSelected: PropTypes.func,
  onElectricSelected: PropTypes.func,
  onOilSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdHeating;
