import React from 'react';
import classNames from 'classnames';
import ButtonPlusMinus from '../ButtonPlusMinus';
import Typography from '../Typography';
import styles from './styles.css';

function CounterInputGeneral(props) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Typography
        className={classNames(styles.counterText, [props.className]: props.className)}
        type={'bodyTextNormal'}
        >
        {props.label}
      </Typography>
      <Typography
        className={classNames([props.className]: props.className)}
        type={'bodyTextNormal'}
        >
        {props.resultNumber}
      </Typography>
      <ButtonPlusMinus
        className={classNames(styles.minus, [props.className]: props.className)}
        inactive={props.inactiveNegative}
        onClick={props.onClick}
        operator="remove"
        />
      <ButtonPlusMinus
        className={classNames(styles.plus, [props.className]: props.className)}
        inactive={props.inactivePositive}
        onClick={props.onClick}
        operator="plus"
        />
    </div>
  );
}

CounterInputGeneral.propTypes = {
  className: React.PropTypes.string,
  inactiveNegative: React.PropTypes.bool,
  inactivePositive: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  operator: React.PropTypes.oneOf(['plus', 'remove']),
  resultNumber: React.PropTypes.string
};

export default CounterInputGeneral;
