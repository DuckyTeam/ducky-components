import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdFirewood(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvor mye ved bruker du i løpet av et år'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Ingenting'}
            label={'Ingenting'}
            onClick={props.onNothingSelected}
            />
          <RadioButton
            checked={props.selected === 'Opp til 12 sekker'}
            label={'Opp til 12 sekker'}
            onClick={props.onUptoTwelveSelected}
            />
          <RadioButton
            checked={props.selected === '1-3 palle'}
            label={'1-3 palle'}
            onClick={props.onOneToThreeSelected}
            />
          <RadioButton
            checked={props.selected === '3-5 paller'}
            label={'3-5 paller'}
            onClick={props.onThreeToFiveSelected}
            />
          <RadioButton
            checked={props.selected === 'paller eller mer'}
            label={'paller eller mer'}
            onClick={props.onMoreThanFiveSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om vedfyring, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdFirewood.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onMoreThanFiveSelected: PropTypes.func,
  onNothingSelected: PropTypes.func,
  onOneToThreeSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onThreeToFiveSelected: PropTypes.func,
  onUptoTwelveSelected: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdFirewood;
