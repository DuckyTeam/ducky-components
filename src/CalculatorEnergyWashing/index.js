import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import CalculatorGeneralItem from '../CalculatorGeneralItem';

function CalculatorEnergyWashing(props) {
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
          checked={props.checkedWashingAmount.toLowerCase() === 'mindless'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveMindless}
          onClick={() => props.onClick(props.lblSaveMindless)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'halffull'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveHalf}
          onClick={() => props.onClick(props.lblSaveHalf)}
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

CalculatorEnergyWashing.propTypes = {
  checked: React.PropTypes.bool,
  checkedWashingAmount: React.PropTypes.oneOf(['always', 'often', 'mindless', 'halffull']),
  children: React.PropTypes.string,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  label: React.PropTypes.string,
  lblSaveAlways: React.PropTypes.string,
  lblSaveHalf: React.PropTypes.string,
  lblSaveMindless: React.PropTypes.string,
  lblSaveOften: React.PropTypes.string,
  onClick: React.PropTypes.func,
  saveButtonText: React.PropTypes.string,
  value: React.PropTypes.string
};

export default CalculatorEnergyWashing;
