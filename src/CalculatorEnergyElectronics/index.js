import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import CalculatorGeneralItem from '../CalculatorGeneralItem';

function CalculatorEnergyElectronics(props) {
  return (
    <div>
      <CalculatorGeneralItem
        expanded={props.expanded}
        label={props.label}
        saveButtonText={props.saveButtonText}
        value={props.value}
        >
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'always'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveAlways}
          onClick={() => props.onClick(props.lblSaveAlways)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'often'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveOften}
          onClick={() => props.onClick(props.lblSaveOften)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'sometimes'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveMindless}
          onClick={() => props.onClick(props.lblSaveMindless)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'never'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveNever}
          onClick={() => props.onClick(props.lblSaveNever)}
          />
        <Spacer />
      </CalculatorGeneralItem>
      <Wrapper size="side-bottom">
        <Typography type="caption2Normal">
          {props.children}
        </Typography>
      </Wrapper>
    </div>
  );
}

CalculatorEnergyElectronics.propTypes = {
  checked: React.PropTypes.bool,
  checkedWashingAmount: React.PropTypes.oneOf(['always', 'often', 'sometimes', 'never']),
  children: React.PropTypes.string,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  label: React.PropTypes.string,
  lblSaveAlways: React.PropTypes.string,
  lblSaveMindless: React.PropTypes.string,
  lblSaveNever: React.PropTypes.string,
  lblSaveOften: React.PropTypes.string,
  onClick: React.PropTypes.func,
  saveButtonText: React.PropTypes.string,
  value: React.PropTypes.string
};

export default CalculatorEnergyElectronics;
