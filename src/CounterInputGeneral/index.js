import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function CounterInputGeneral(props) {
  return (
    ""
  );
}

CounterInputGeneral.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  inactive: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  onCloseClick: React.PropTypes.func,
  onSaveButtonClicked: React.PropTypes.func,
  saveButtonText: React.PropTypes.string,
  value: React.PropTypes.string
};

export default CounterInputGeneral;
