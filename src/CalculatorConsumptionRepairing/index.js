import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorConsumptionRepairing(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvor ofte reparerer du slitte/ødelagte ting?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Alltid, om mulig'}
            label={'Alltid, om mulig'}
            onClick={props.onAlwaysSelected}
            />
          <RadioButton
            checked={props.selected === 'Av og til'}
            label={'Av og til'}
            onClick={props.onOccasionallySelected}
            />
          <RadioButton
            checked={props.selected === 'Veldig sjeldent'}
            label={'Veldig sjeldent'}
            onClick={props.onVeryRarelySelected}
            />
          <RadioButton
            checked={props.selected === 'Aldri'}
            label={'Aldri'}
            onClick={props.onNeverSelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om reparasjon, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorConsumptionRepairing.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAlwaysSelected: PropTypes.func,
  onNeverSelected: PropTypes.func,
  onOccasionallySelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onVeryRarelySelected: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorConsumptionRepairing;
