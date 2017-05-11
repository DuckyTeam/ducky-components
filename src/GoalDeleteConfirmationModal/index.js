import React from 'react';
import PropTypes from 'prop-types';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import Modal from '../Modal';
import Wrapper from '../Wrapper';
import SectionFooterCancelOK from '../SectionFooterCancelOK';
import Typography from '../Typography';
import classNames from 'classnames';


function GoalDeleteConfirmationModal(props) {
  return (
    <Modal
      className={classNames({[props.className]: props.className})}
      onHide={props.onCancel}
      show={props.show}
      >
      <SectionHeaderGeneral
        onCancel={props.onCancel}
        rightIcon="icon-close"
        title={props.title}
        />
      <Wrapper size="standard">
        <Typography type="bodyTextNormal">
          {props.children}
        </Typography>
      </Wrapper>
      <SectionFooterCancelOK
        okButtonText="SLETT"
        onCancel={props.onCancel}
        onClick={props.onOk}
        />
    </Modal>
  );
}

GoalDeleteConfirmationModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string
};

export default GoalDeleteConfirmationModal;
