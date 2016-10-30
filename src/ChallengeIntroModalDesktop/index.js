import ButtonRaised from '../ButtonRaised';
import ChallengeMeta7 from '../ChallengeMeta7';
import classNames from 'classnames';
import React from 'react';
import Modal from '../Modal';
import styles from './styles.css';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
const PropTypes = React.PropTypes;

function ChallengeIntroModal3Desktop(props) {
  return (
    <Modal
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      onHide={props.onCancel}
      show={props.show}
      style={styles.challengeIntroModal}
      >
      <div
        className={styles.challengeIntroImage}
        style={{backgroundImage: `url(${props.image})`}}
        />
      <Wrapper
        className={styles.challengeIntroWrapper}
        size="standard"
        >
        <Typography
          style={styles.title}
          type="ingressStrong"
          >
          {props.children}
        </Typography>
        <Typography
          className={styles.text}
          isYourteam={props.isYourteam}
          type="bodyTextNormal"
          >
          Du deltar nå på denne utfordringen sammen med {props.memberCount} andre personer!
        </Typography>
        <ChallengeMeta7
          className={styles.challengeMeta7}
          icon={props.icon}
          isLeader={props.isLeader}
          isYourteam={props.isYourteam}
          memberCount={props.memberCount}
          name={props.name}
          />
        <div className={styles.buttonWrapper}>
          <ButtonRaised
            onClose={props.onClick}
            type={props.type}
            >
            {'OK'}
          </ButtonRaised>
        </div>
      </Wrapper>
    </Modal>
  );
}

ChallengeIntroModal3Desktop.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  isLeader: React.PropTypes.bool,
  isYourteam: React.PropTypes.bool,
  memberCount: React.PropTypes.number,
  name: React.PropTypes.string,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  type: React.PropTypes.node
};

export default ChallengeIntroModal3Desktop;
