import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdHeatPump(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Har du varmepumpe??'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Væske til vann'}
            label={'Væske til vann'}
            onClick={props.onLiquidWaterSelected}
            />
          <RadioButton
            checked={props.selected === 'Luft til vann'}
            label={'Luft til vann'}
            onClick={props.onAirToWaterSelected}
            />
          <RadioButton
            checked={props.selected === 'Luft til luft'}
            label={'Luft til luft'}
            onClick={props.onAirToAirSelected}
            />
          <RadioButton
            checked={props.selected === 'Ingen'}
            label={'Ingen'}
            onClick={props.onNoSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om oppvarming av rom, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdHeatPump.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAirToAirSelected: PropTypes.func,
  onAirToWaterSelected: PropTypes.func,
  onLiquidWaterSelected: PropTypes.func,
  onNoSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdHeatPump;
