import React from 'react';
import Modal from '../Modal';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import Typography from '../Typography';
import SectionFooterClose from '../SectionFooterClose';

import styles from './styles.css';
const PropTypes = React.PropTypes;

function CO2ActionsInfoModal(props) {
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      >
      <div className={styles.closeIconWrapper} >
        <Icon
          className={styles.closeIcon}
          icon={"icon-close"}
          onClick={props.onHide}
          />
      </div>
      <Wrapper
        className={styles.topSectionWrapper}
        size={'side-bottom'}
        >
        <Icon
          size={'display1'}
          className={styles.leafIcon}
          icon={'icon-leaf'}
          />
        <Typography
          type={'ingressStrong'}
          className={styles.topSectionHeading}
          >
          {'Innsparing kgCO2e'}
        </Typography>
        <Typography
          type={'bodyTextNormal'}
          className={styles.topSectionContent}
          >
          {'Fotavtrykket ditt er det samlede utslippet av alle handlinger du gjør'}
        </Typography>
      </Wrapper>
      <Wrapper
        className={styles.bottomSectionWrapper}
        size={'standard'}
        >
        <img
          src={props.bottomSectionImageUrl}
          className={styles.bottomSectionImage}
          />
        <Typography
          type={'ingressStrong'}
          className={styles.bottomSectionHeading}
          >{'Bærekraftige tiltak'}</Typography>
        <Typography
          type={'bodyTextNormal'}
          className={styles.bottomSectionContent}
          >{'Ducky har, sammen med forskere fra NTNU'}</Typography>
      </Wrapper>
      <SectionFooterClose
        className={styles.sectionFooter}
        onClick={props.onHide}
        />
    </Modal>
);
}

CO2ActionsInfoModal.propTypes = {
  bottomSectionImageUrl: PropTypes.string,
  onHide: PropTypes.func,
  show: PropTypes.bool
};

export default CO2ActionsInfoModal;
