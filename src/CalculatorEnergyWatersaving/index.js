import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import CalculatorGeneralItem from '../CalculatorGeneralItem';

function CalculatorEnergyWatersaving(props) {
  return (
    <div>
      <CalculatorGeneralItem
        expanded={props.expanded}
        label={props.label}
        saveButtonText={props.saveButtonText}
        value={props.value}
        >
        <RadioButton
          checked={props.checkedShowerAmount.toLowerCase() === 'always'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveAlways}
          onClick={() => props.onClick(props.lblSaveAlways)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedShowerAmount.toLowerCase() === 'sometimes'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveSometimes}
          onClick={() => props.onClick(props.lblSaveSometimes)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedShowerAmount.toLowerCase() === 'rarely'}
          className={classNames({[props.className]: props.className})}
          label={props.lblSaveRarely}
          onClick={() => props.onClick(props.lblSaveRarely)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedShowerAmount.toLowerCase() === 'never'}
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

CalculatorEnergyWatersaving.propTypes = {
  checked: React.PropTypes.bool,
  checkedShowerAmount: React.PropTypes.oneOf(['always', 'sometimes', 'rarely', 'never']),
  children: React.PropTypes.string,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  label: React.PropTypes.string,
  lblSaveAlways: React.PropTypes.string,
  lblSaveNever: React.PropTypes.string,
  lblSaveRarely: React.PropTypes.string,
  lblSaveSometimes: React.PropTypes.string,
  onClick: React.PropTypes.func,
  saveButtonText: React.PropTypes.string,
  value: React.PropTypes.string
};

export default CalculatorEnergyWatersaving;
