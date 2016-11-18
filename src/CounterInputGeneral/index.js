import React from 'react';
import styles from './styles.css';
import ButtonPlusMinus from '../ButtonPlusMinus';
import Typography from '../Typography';
const PropTypes = React.PropTypes;

function CounterInputGeneral(props) {
  return (
    <div className={styles.wrapper
    } >
      <Typography
        className={styles.valueType}
        type={'bodyTextNormal'}
        >
        {props.valueType}
      </Typography>
      <Typography
        className={`${props.value === 0 ? styles.valueMuted : styles.value}`}
        type={'bodyTextNormal'}
        >
        {props.value}
      </Typography>
      <ButtonPlusMinus
        className={styles.minusButton}
        inactive={props.value === 0}
        onClick={props.decreaseValue}
        operator={'remove'}
        />
      <ButtonPlusMinus
        className={styles.plusButton}
        onClick={props.increaseValue}
        operator={'plus'}
        />
    </div>
  );
}

CounterInputGeneral.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  decreaseValue: PropTypes.func,
  increaseValue: PropTypes.func,
  value: PropTypes.number,
  valueType: PropTypes.string
};

export default CounterInputGeneral;
