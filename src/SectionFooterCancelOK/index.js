import React from 'react';
import ButtonRaised from './../ButtonRaised';
import Button from './../Button';
import styles from './styles.css';
import classNames from 'classnames';

class SectionFooterCancelOK extends React.Component {
  render() {
    return (
      <div className={classNames(styles.wrapper, {[this.props.className]: this.props.className})}>
        <Button
          className={styles.button}
          onClick={this.props.onCancel}
          >
          AVBRYT
        </Button>
        <ButtonRaised
          className={styles.raisedButton}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          >
          {this.props.okButtonText || 'OK'}
        </ButtonRaised>
      </div>
    );
  }
}

SectionFooterCancelOK.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  okButtonText: React.PropTypes.string,
  onCancel: React.PropTypes.func,
  onClick: React.PropTypes.func
};

export default SectionFooterCancelOK;
