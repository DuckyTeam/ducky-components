import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdTemperature(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hva er innetemperatur i boligen din?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === '18°C eller kaldere'}
            label={'18°C eller kaldere'}
            onClick={props.onEighteenOrLessSelected}
            />
          <RadioButton
            checked={props.selected === '19-21°C'}
            label={'19-21°C'}
            onClick={props.onNineteenToTwentyOneSelected}
            />
          <RadioButton
            checked={props.selected === '21-23°C'}
            label={'21-23°C'}
            onClick={props.onTwentyOneToTwentyThreeSelected}
            />
          <RadioButton
            checked={props.selected === '23-25°C'}
            label={'23-25°C'}
            onClick={props.onTwentyThreeToTwentyFiveSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om innetemperatur, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdTemperature.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onEighteenOrLessSelected: PropTypes.func,
  onNineteenToTwentyOneSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onTwentyOneToTwentyThreeSelected: PropTypes.func,
  onTwentyThreeToTwentyFiveSelected: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdTemperature;
