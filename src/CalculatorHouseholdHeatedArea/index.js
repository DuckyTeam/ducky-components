import React from 'react';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import RadioButton from '../RadioButton';

import styles from './styles.css';

const PropTypes = React.PropTypes;

function CalculatorHouseholdHeatedArea(props) {
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
            checked={props.selected === 'Lav temperatur i mange rom'}
            label={'Lav temperatur i mange rom'}
            onClick={props.onLowMostRoomsSelected}
            />
          <RadioButton
            checked={props.selected === 'Begrenset oppvarming i noen rom'}
            label={'Begrenset oppvarming i noen rom'}
            onClick={props.onLimitedSomeRoomsSelected}
            />
          <RadioButton
            checked={props.selected === 'Det meste er oppvarmet'}
            label={'Det meste er oppvarmet'}
            onClick={props.onMostlyHeatedSelected}
            />
          <RadioButton
            checked={props.selected === 'Alt er oppvarmet'}
            label={'Alt er oppvarmet'}
            onClick={props.onEverythingHeatedSelected}
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

CalculatorHouseholdHeatedArea.propTypes = {
  expanded: PropTypes.string,
  label: PropTypes.string,
  onEverythingHeatedSelected: PropTypes.func,
  onLimitedSomeRoomsSelected: PropTypes.func,
  onLowMostRoomsSelected: PropTypes.func,
  onMostlyHeatedSelected: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  selected: PropTypes.string
};

export default CalculatorHouseholdHeatedArea;
