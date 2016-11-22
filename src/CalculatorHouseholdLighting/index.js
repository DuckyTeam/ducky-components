import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdLighting(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvilken type belysning har du?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Mest LED-belysning'}
            label={'Mest LED-belysning'}
            onClick={props.onMostlyLEDSelected}
            />
          <RadioButton
            checked={props.selected === 'Noe LED-belysning'}
            label={'Noe LED-belysning'}
            onClick={props.onSomeLEDSelected}
            />
          <RadioButton
            checked={props.selected === 'Glødepærer og halogen'}
            label={'Glødepærer og halogen'}
            onClick={props.onIncandescentHalogenSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om belysning, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdLighting.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onIncandescentHalogenSelected: PropTypes.func,
  onMostlyLEDSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onSomeLEDSelected: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdLighting;
