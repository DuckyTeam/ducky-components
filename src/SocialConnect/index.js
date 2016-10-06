import Icon from '../Icon';
import ButtonMini from '../ButtonMini';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function SocialConnect(props) {
    let socialMediaIcon = 'icon-facebook';

    if (props.socialMedia.toUpperCase() === 'TWITTER') {
        socialMediaIcon = 'icon-twitter';
    } else if (props.socialMedia.toUpperCase() === 'GOOGLE+') {
        socialMediaIcon = 'icon-google-plus';
    } else if (props.socialMedia.toUpperCase() === 'INSTAGRAM') {
        socialMediaIcon = 'icon-instagram';
    }
    return (
        <div>
            <div
                className={classNames(styles.wrapper, {
                    [styles.checkedWrapper]: props.connected,
                    [props.className]: props.className
                })}
                onClick={props.onClick}
            >
                <Icon
                    className={classNames(styles.icon, {
                        [styles.checkedIcon]: props.connected
                    })}
                    icon={socialMediaIcon}
                    size={'standard'}
                />
            </div>
            <div className={styles.buttonMini}>
                <ButtonMini
                    icon={props.connected ? 'icon-check' : 'icon-add'}
                    theme={props.connected ? 'border' : 'fill'}
                />
            </div>
        </div>
    );
}

SocialConnect.propTypes = {
    className: React.PropTypes.string,
    connected: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    socialMedia: React.PropTypes.oneOf(['facebook', 'twitter', 'google+', 'instagram'])
};

export default SocialConnect;
