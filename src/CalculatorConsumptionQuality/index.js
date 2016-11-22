import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorConsumptionQuality(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Hvor ofte velger du kvalitetsprodukter?'}
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
            checked={props.selected === 'Ofte'}
            label={'Ofte'}
            onClick={props.onOftenSelected}
            />
          <RadioButton
            checked={props.selected === 'Av og til'}
            label={'Av og til'}
            onClick={props.onOccasionallySelected}
            />
          <RadioButton
            checked={props.selected === 'Sjeldent'}
            label={'Sjeldent'}
            onClick={props.onRarelySelected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om kvalitetsprodukter, og hvordan vi definerer alternativene.'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorConsumptionQuality.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAlwaysSelected: PropTypes.func,
  onOccasionallySelected: PropTypes.func,
  onOftenSelected: PropTypes.func,
  onRarelySelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorConsumptionQuality;
