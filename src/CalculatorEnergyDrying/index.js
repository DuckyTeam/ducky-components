import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import CalculatorGeneralItem from '../CalculatorGeneralItem';

function CalculatorEnergyDrying(props) {
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
          label={props.lblDryAlways}
          onClick={() => props.onClick(props.lblDryAlways)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'often'}
          className={classNames({[props.className]: props.className})}
          label={props.lblDryOften}
          onClick={() => props.onClick(props.lblDryOften)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'sometimes'}
          className={classNames({[props.className]: props.className})}
          label={props.lblDrySometimes}
          onClick={() => props.onClick(props.lblDrySometimes)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedWashingAmount.toLowerCase() === 'never'}
          className={classNames({[props.className]: props.className})}
          label={props.lblDryNever}
          onClick={() => props.onClick(props.lblDryNever)}
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

CalculatorEnergyDrying.propTypes = {
  checked: React.PropTypes.bool,
  checkedWashingAmount: React.PropTypes.oneOf(['always', 'often', 'sometimes', 'never']),
  children: React.PropTypes.string,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  label: React.PropTypes.string,
  lblDryAlways: React.PropTypes.string,
  lblDryNever: React.PropTypes.string,
  lblDryOften: React.PropTypes.string,
  lblDrySometimes: React.PropTypes.string,
  onClick: React.PropTypes.func,
  saveButtonText: React.PropTypes.string,
  value: React.PropTypes.string
};

export default CalculatorEnergyDrying;
