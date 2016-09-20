import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsPrivacyGeneral(props) {
    return (
        <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
            onClick={props.onClick}
            size={'standard'}
        >
            <div className={styles.composite}>
                <Typography
                    className={styles.typoTitle}
                    type={'bodyTextNormal'}
                >
                    {'Instilling'}
                </Typography>
                <Typography
                    className={styles.typoContent}
                    type={'bodyTextStrong'}
                >
                    {props.privacySettings || 'normal'}
                </Typography>
            </div>
        </Wrapper>
    );
}

SettingsPrivacyGeneral.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    privacySettings: PropTypes.string
};

export default SettingsPrivacyGeneral;
