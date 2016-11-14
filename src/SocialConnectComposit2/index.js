import React from 'react';
import classNames from 'classnames';
import SocialConnect from '../SocialConnect';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function SocialConnectComposit2(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      >
      <Wrapper
        className={styles.importSocialWrapper}
        size="short"
        >
        <Typography
          className={styles.importContactsText}
          type="caption2Normal"
          >
          Importer dine kontakter for å finne personer å følge på Ducky. Vi lagrer ikke din data, og poster aldri noe uten din tilatelse.
        </Typography>
      </Wrapper>
      <Wrapper
        className={styles.socialWrapper}
        size="side-bottom"
        >
        <SocialConnect
          className={styles.socialbtn}
          connected={props.connectedFacebook}
          onClick={props.onClick}
          socialMedia={'facebook'}
          />
        <SocialConnect
          className={styles.socialbtn}
          connected={props.connectedGoogle}
          onClick={props.onClick}
          socialMedia={'google+'}
          />
        <SocialConnect
          className={styles.socialbtn}
          connected={props.connectedTwitter}
          onClick={props.onClick}
          socialMedia={'twitter'}
          />
      </Wrapper>
      <Spacer
        className={styles.socialSpacer}
        size="double"
        />
    </div>
  );
}

SocialConnectComposit2.propTypes = {
  className: React.PropTypes.string,
  connectedFacebook: React.PropTypes.bool,
  connectedGoogle: React.PropTypes.bool,
  connectedTwitter: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  social: React.PropTypes.oneOf(['facebook', 'twitter', 'google+']),
  social2: React.PropTypes.oneOf(['facebook', 'twitter', 'google+']),
  social3: React.PropTypes.oneOf(['facebook', 'twitter', 'google+'])
};

export default SocialConnectComposit2;
