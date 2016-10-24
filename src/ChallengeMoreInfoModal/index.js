import React from 'react';
import styles from './styles.css';
import Modal from '../Modal';
const PropTypes = React.PropTypes;

function ChallengeMoreInfoModal(props) {
  <Modal
    show={props.show}
    onHide={props.onHide}
    >
    <div
      className={styles.headerImage}
      style={{backgroundImage: `url(${props.imgurl})`}}
      />
  </Modal>
}

ChallengeMoreInfoModal.propTypes = {
  imgurl: PropTypes.string
}

export default ChallengeMoreInfoModal;
