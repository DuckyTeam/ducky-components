import React from 'react';
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
        AVBRYT
      </Button>
      <ButtonRaised
        className={styles.raisedButton}
        disabled={props.disabled}
        onClick={props.onClick}
        >
        {props.okButtonText || 'OK'}
      </ButtonRaised>
    </div>
  );
}

SectionFooterCancelOK.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  okButtonText: React.PropTypes.string,
  onCancel: React.PropTypes.func,
  onClick: React.PropTypes.func
};

export default SectionFooterCancelOK;
