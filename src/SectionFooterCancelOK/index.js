import React from 'react';
import PropTypes from 'prop-types';
import ButtonRaised from './../ButtonRaised';
import Button from './../Button';
import styles from './styles.css';
import classNames from 'classnames';

function SectionFooterCancelOK(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Button
        className={styles.button}
        onClick={props.onCancel}
        >
        {props.cancelButtonText}
      </Button>
      <ButtonRaised
        className={styles.raisedButton}
        disabled={props.disabled}
        onClick={props.onClick}
        >
        {props.okButtonText}
      </ButtonRaised>
    </div>
  );
}

SectionFooterCancelOK.propTypes = {
  cancelButtonText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  okButtonText: PropTypes.string,
  onCancel: PropTypes.func,
  onClick: PropTypes.func
};

export default SectionFooterCancelOK;
