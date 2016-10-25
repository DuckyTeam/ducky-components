import React from 'react';
import styles from './styles.css';
import SocialConnect from "../SocialConnect";
import Typography from "../Typography";

function SocialConnectCompositeOne(props) {
  return (
    <div className={styles.socialConnectWrapper} >
      <Typography
        className={styles.socialConnectText}
        type={'caption2Normal'}
        >
        {'Importer dine kontakter for å finne personer å følge på Ducky. Vi lagrer ikke din data, og poster aldri noe uten din tilatelse'}
      </Typography>
      <div className={styles.socialConnectButton} >
        <SocialConnect
          connected={props.connectedFacebook}
          socialMedia={'facebook'}
          />
      </div>
      <div className={styles.socialConnectButton} >
        <SocialConnect
          connected={props.connectedGoogle}
          socialMedia={'google+'}
          />
      </div>
      <div className={styles.socialConnectButton} >
        <SocialConnect
          connected={props.connectedTwitter}
          socialMedia={'twitter'}
          />
      </div>
    </div>
  );
}

SocialConnectCompositeOne.propTypes = {
  connectedFacebook: React.PropTypes.bool,
  connectedGoogle: React.PropTypes.bool,
  connectedTwitter: React.PropTypes.bool
};

export default SocialConnectCompositeOne;
