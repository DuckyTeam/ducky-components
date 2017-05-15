import SocialConnect from '../SocialConnect';
import Typography from '../Typography';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function SettingsItemAppConnect(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div>
                <SocialConnect
                    connected={props.connected}
                    socialMedia={props.socialMedia}
                />
            </div>
            <div className={styles.composite}>
              {
                  props.connected
                      ? <Typography
                          className={styles.typoNormal}
                          onClick={props.onClick}
                          size={'caption2Normal'}
                        >
                        {'Koblet til som '}<b>{props.userName}</b>
                      </Typography>
                    : <Typography
                        className={styles.typoStrong}
                        onClick={props.onClick}
                        size={'caption2Strong'}
                      >
                      {'Koble til med '}{props.socialMedia.toLowerCase()}
                    </Typography>
              }
              {
                  props.connected
                      ? <Typography
                          className={styles.typoStrong}
                          size={'caption2Strong'}
                        >
                        {'Koble fra'}
                      </Typography>
                    : <Typography
                        className={styles.typoNormal}
                        size={'caption2Normal'}
                      >
                      {'Importer dine kontakter'}
                    </Typography>
              }
            </div>
        </div>
    );
}

SettingsItemAppConnect.propTypes = {
    className: PropTypes.string,
    connected: PropTypes.bool,
    onClick: PropTypes.func,
    socialMedia: PropTypes.oneOf(['facebook', 'twitter', 'google+', 'instagram']),
    userName: PropTypes.string
};

export default SettingsItemAppConnect;
