import React from 'react';
import styles from './styles.css';
import Modal from '../Modal';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Spacer from '../Spacer';
import CounterInputGeneral from '../CounterInputGeneral';

const PropTypes = React.PropTypes;

function CalculatorSection3(props) {
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      >
      test
    </Modal>
  );
}

CalculatorSection3.propTypes = {
  className: PropTypes.string,
  onHide: PropTypes.func,
  show: PropTypes.bool
};

export default CalculatorSection3;
