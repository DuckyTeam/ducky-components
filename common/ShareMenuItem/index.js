import ActionButton from '../ActionButton';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './ShareMenuItem.css';
const PropTypes = React.PropTypes;

/* eslint-disable max-statements */

function ShareMenuItem(props) {
    const share = props.share;
    let icon = props.icon;
    let text = props.text;

    if (share) {
        if (share === 'fb') {
            icon = 'icon-facebook';
            text = 'Facebook';
        } else if (share === 'twit') {
            icon = 'icon-twitter';
            text = 'Twitter';
        } else if (share === 'google') {
            icon = 'icon-google-plus';
            text = 'Google+';
        } else if (share === 'link') {
            icon = 'icon-link';
            text = 'Kopier lenke';
        }
    }

    return (
        <div
            className={classNames({
                [props.className]: props.className
            })}
        >
            <Wrapper
                className={styles.wrapper}
                size={'short'}
                onClick={props.onClick}
            >
                <ActionButton
                    className={styles.button}
                    icon={icon}
                    size={'standard'}
                />
                <Typography
                    className={styles.text}
                    type={'bodyTextNormal'}
                >
                    {text}
                </Typography>
            </Wrapper>
        </div>
    );
}

ShareMenuItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    share: PropTypes.oneOf(['fb', 'twit', 'google', 'link']),
    text: PropTypes.string
};

export default ShareMenuItem;
