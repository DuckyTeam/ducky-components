import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdBuilding(props) {
  return (
    <div className={styles.outerWrapper} >
      <Wrapper
        className={styles.itemWrapper}
        size={'standard'}
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={'Når ble boligen din bygd eller renovert?'}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={'Lagre'}
          value={props.selected}
          >
          <RadioButton
            checked={props.selected === 'Etter 2010'}
            label={'Etter 2010'}
            onClick={props.onAfter2010Selected}
            />
          <RadioButton
            checked={props.selected === 'På 00-tallet'}
            label={'På 00-tallet'}
            onClick={props.onDuring00Selected}
            />
          <RadioButton
            checked={props.selected === 'På 90-tallet'}
            label={'På 90-tallet'}
            onClick={props.onDuring90Selected}
            />
          <RadioButton
            checked={props.selected === 'På 80-tallet'}
            label={'På 80-tallet'}
            onClick={props.onDuring80Selected}
            />
          <RadioButton
            checked={props.selected === 'Før 1980'}
            label={'Før 1980'}
            onClick={props.onBefore1980Selected}
            />
          <Spacer size={'double'} />
          <Typography type={'caption2Normal'}>
            {'Her kommer litt info om bolig og energiklasser, og hvordan vi definerer alternativene'}
          </Typography>
        </CalculatorGeneralItem>
      </Wrapper>
    </div>
  );
}

CalculatorHouseholdBuilding.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onAfter2010Selected: PropTypes.func,
  onBefore1980Selected: PropTypes.func,
  onDuring00Selected: PropTypes.func,
  onDuring80Selected: PropTypes.func,
  onDuring90Selected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdBuilding;
