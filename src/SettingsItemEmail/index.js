import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItemEmail(props) {
    return (
        <Wrapper className={classNames(styles.wrapper, {
            [styles.inactiveWrapper]: props.inactive,
            [props.className]: props.className
        })}
            onClick={props.inactive ? props.onClick : ''}
            size={'standard'}
        >
            <div className={styles.composite}>
                <Typography
                    className={props.inactive ? styles.typoTitleInactive : styles.typoTitle}
                    type={'bodyTextNormal'}
                >
                    {'Epost'}
                </Typography>
                <Typography
                    className={props.inactive ? styles.typoContentInactive : styles.typoContent}
                    type={'bodyTextStrong'}
                >
                    {props.email}
                </Typography>
            </div>
        </Wrapper>
    );
}

SettingsItemEmail.propTypes = {
    className: PropTypes.string,
    email: PropTypes.string,
    inactive: PropTypes.bool,
    onClick: PropTypes.func
};

export default SettingsItemEmail;
