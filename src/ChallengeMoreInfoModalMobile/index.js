import React from 'react';
import styles from './styles.css';
import Modal from '../Modal';
import Footer from '../SectionFooterCancelOK';
import Typography from '../Typography';
import CarouselNav from '../CarouselNavigator1';
import Wrapper from '../Wrapper';
const PropTypes = React.PropTypes;

function ChallengeMoreInfoModalMobile(props) {
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      >
      <div className={styles.wrapper}>
        <div
          className={styles.headerImage}
          style={{backgroundImage: `url(${props.imgurl})`}}
          />
        <div className={styles.modal}>
          <Wrapper className={styles.textWrapper}>
            {props.heading
              ? <Typography className={styles.header}
                type="ingressStrong"
                >
                {props.heading}
              </Typography>
              : null
            }
            <Typography className={styles.content}
              type="bodyTextNormal"
              >
              {props.content}
            </Typography>
          </Wrapper>
          <div className={styles.caroStyle}>
            <CarouselNav slideCount={props.slideCount} />
          </div>
        </div>
      </div>
      <Footer
        cancelButtonText={props.currentSlide === 1 ? 'Lukk' : 'Tilbake'}
        className={styles.footer}
        okButtonText={props.currentSlide === props.slideCount ? 'OK' : 'Neste'}
        />
    </Modal>
);
}

ChallengeMoreInfoModalMobile.propTypes = {
  content: PropTypes.string,
  currentSlide: React.PropTypes.number,
  heading: PropTypes.string,
  imgurl: PropTypes.string,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  slideCount: React.PropTypes.number
};

export default ChallengeMoreInfoModalMobile;
