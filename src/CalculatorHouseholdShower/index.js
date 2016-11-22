import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdShower(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvilken type dusj har du'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Sparedusj'}
            label={'Sparedusj'}
            onClick={props.onSavingSelected}
            />
          <RadioButton
            checked={props.selected === 'Vet ikke'}
            label={'Vet ikke'}
            onClick={props.onDontKnowSelected}
            />
          <RadioButton
            checked={props.selected === 'Vanlig (ikke sparedusj)'}
            label={'Vanlig (ikke sparedusj)'}
            onClick={props.onRegularSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om dusjtyper, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdShower.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onDontKnowSelected: PropTypes.func,
  onRegularSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onSavingSelected: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdShower;
