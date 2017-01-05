import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import Typography from '../Typography';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CalculatorHabitEnergyElectronics(props) {
  return (
    <div>
      <Wrapper
        className={styles.wrapper}
        size="standard"
        >
        <CalculatorGeneralItem
          expanded={props.expanded}
          label={props.energyElectronicsQuestion}
          onSaveButtonClicked={props.onSaveButtonClicked}
          saveButtonText={props.selectedSavetext}
          value={props.savebuttonTextElectronics}
          >
          <RadioButton
            checked={props.checkedElectronics.toLowerCase() === 'avoid'}
            className={classNames({[props.className]: props.className})}
            label={props.avoidElectronicsLabel}
            onClick={() => props.onClick(props.avoidElectronicsLabel)}
            />
          <Spacer />
          <RadioButton
            checked={props.checkedElectronics.toLowerCase() === 'reduce'}
            className={classNames({[props.className]: props.className})}
            label={props.reduceElectronicsLabel}
            onClick={() => props.onClick(props.reduceElectronicsLabel)}
            />
          <Spacer />
          <RadioButton
            checked={props.checkedElectronics.toLowerCase() === 'mindless'}
            className={classNames({[props.className]: props.className})}
            label={props.mindlessElectronicsLabel}
            onClick={() => props.onClick(props.mindlessElectronicsLabel)}
            />
          <Spacer />
          <RadioButton
            checked={props.checkedElectronics.toLowerCase() === 'crazy'}
            className={classNames({[props.className]: props.className})}
            label={props.crazyElectronicsLabel}
            onClick={() => props.onClick(props.crazyElectronicsLabel)}
            />
        </CalculatorGeneralItem>
        <Spacer />
      </Wrapper>
      <Wrapper size="side-bottom">
        <Typography>
          {props.children}
        </Typography>
      </Wrapper>
    </div>
  );
}

CalculatorHabitEnergyElectronics.propTypes = {
  avoidElectronicsLabel: React.PropTypes.string,
  children: React.PropTypes.string,
  className: React.PropTypes.string,
  crazyElectronicsLabel: React.PropTypes.string,
  energyElectronicsQuestion: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  label: React.PropTypes.string,
  mindlessElectronicsLabel: React.PropTypes.string,
  onSaveButtonClicked: React.PropTypes.func,
  reduceElectronicsLabel: React.PropTypes.string,
  savebuttonTextElectronics: React.PropTypes.string,
  selectedSavetext: React.PropTypes.string,
  standardSavetext: React.PropTypes.string
};

export default CalculatorHabitEnergyElectronics;
