import ButtonRaised from '../ButtonRaised';
import ChallengeMeta7 from '../ChallengeMeta7';
import classNames from 'classnames';
import React from 'react';
import Modal from '../Modal';
import styles from './styles.css';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
const PropTypes = React.PropTypes;

function ChallengeIntroModal3(props) {
  return (
    <Modal
      className={classNames(styles.wrapper)}
      onHide={props.onCancel}
      show={props.show}
      style={styles.challengeIntroModal}
      >
      <div
        className={classNames(styles.challengeIntroImage, {[props.className]: props.className})}
        style={{backgroundImage: `url(${props.image})`}}
        >
      </div>
      <Wrapper
        className={classNames(styles.challengeIntroWrapper)}
        size="standard"
        >
        <Typography
          style={classNames(styles.title)}
          type="ingressStrong"
          >
          {props.children}
        </Typography>
        <Typography
          className={classNames(styles.text)}
          isYourteam={props.isYourteam}
          type="bodyTextNormal"
          >
          Du deltar nå på denne utfordringen sammen med {props.memberCount} andre personer!
        </Typography>
        <ChallengeMeta7
          className={classNames(styles.challengeMeta7)}
          icon={props.icon}
          isLeader={props.isLeader}
          isYourteam={props.isYourteam}
          memberCount={props.memberCount}
          name={props.name}
          theme={props.theme}
          />
        <div className={classNames(styles.buttonWrap)}>
          <ButtonRaised
            className={classNames(styles.button)}
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

ChallengeIntroModal3.propTypes = {
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
  theme: React.PropTypes.string,
  type: React.PropTypes.node
};

export default ChallengeIntroModal3;
