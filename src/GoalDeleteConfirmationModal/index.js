import React from 'react';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import Modal from '../Modal';
import Wrapper from '../Wrapper';
import SectionFooterCancelOK from '../SectionFooterCancelOK';
import Typography from '../Typography';
const PropTypes = React.PropTypes;

function GoalDeleteConfirmationModal(props) {
  return (
    <Modal
      onHide={props.onCancel}
      show
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
        onCancel={props.onCancel}
        onClick={props.onOk}
        okButtonText="SLETT"
        />
    </Modal>
  );
}

GoalDeleteConfirmationModal.propTypes = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
  onOk: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string
};

export default GoalDeleteConfirmationModal;
