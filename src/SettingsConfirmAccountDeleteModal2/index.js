import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import IconAvaWrapper from '../IconAvaWrapper';
import Icon from '../Icon';
import Input from '../Input';
import ButtonRaised from '../ButtonRaised';
import Modal from '../Modal';
import styles from './styles.css';

function SettingsConfirmAccountDeleteModal2(props) {
  return (
    <Modal
      className={classNames(styles.modal, {[props.className]: props.className})}
      onHide={props.onCancel}
      show={props.show}
      >
      <IconAvaWrapper icon={props.closeIcon || "icon-close"} />
      <Wrapper
        className={styles.deleteWrapper}
        size="side-bottom"
        >
        <Icon
          className={styles.icon}
          icon={props.mainIcon || "icon-duck"}
          size="display2"
          />
        <Typography
          className={styles.textTitle}
          size="ingressStrong"
          >
          {props.confirmDeleteHeader}
        </Typography>
        <Typography size="bodyTextNormal">
          {props.confirmDeleteText}
        </Typography>
        <Input
          autoFocus={props.autoFocus}
          className={styles.inputPassword}
          errorMessage={props.errorMessage}
          inputType={props.inputType || "password"}
          name={props.name}
          onBlur={props.onBlur}
          onChange={props.onChange}
          placeholder={props.passwordPlaceholder || "passord"}
          value={props.value}
          />
        <ButtonRaised
          className={styles.buttonConfirmDelete}
          disabled={props.buttonDisabled}
          onClick={props.onDeleteConfirmClick}
          >
          {props.buttonText}
        </ButtonRaised>
      </Wrapper>
    </Modal>
  );
}

SettingsConfirmAccountDeleteModal2.propTypes = {
  autoFocus: React.PropTypes.bool,
  buttonDisabled: React.PropTypes.bool,
  buttonText: React.PropTypes.string,
  className: React.PropTypes.string,
  closeIcon: React.PropTypes.string,
  confirmDeleteHeader: React.PropTypes.string,
  confirmDeleteText: React.PropTypes.string,
  errorMessage: React.PropTypes.node,
  inputType: React.PropTypes.string,
  mainIcon: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onDeleteConfirmClick: React.PropTypes.func,
  passwordPlaceholder: React.PropTypes.string,
  show: React.PropTypes.bool,
  name: React.PropTypes.string,
  value: React.PropTypes.string
};

export default SettingsConfirmAccountDeleteModal2;
