import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorConsumptionRecycling(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Resirkulerer du mye av avfallet ditt?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Resirkulerer alt og prøver å redusere avfallsmengden min!'}
            label={'Resirkulerer alt og prøver å redusere avfallsmengden min!'}
            onClick={props.onAlwaysSelected}
            />
          <RadioButton
            checked={props.selected === 'Alt som er praktisk mulig'}
            label={'Alt som er praktisk mulig'}
            onClick={props.onWherePracticable}
            />
          <RadioButton
            checked={props.selected === 'Det meste resirkuleres'}
            label={'Det meste resirkuleres'}
            onClick={props.onMostlySelected}
            />
          <RadioButton
            checked={props.selected === 'Er ikke så god på resirkulering...'}
            label={'Er ikke så god på resirkulering...'}
            onClick={props.onNotGoodSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om resirkulering, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorConsumptionRecycling.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAlwaysSelected: PropTypes.func,
  onMostlySelected: PropTypes.func,
  onNotGoodSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onWherePracticable: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorConsumptionRecycling;
