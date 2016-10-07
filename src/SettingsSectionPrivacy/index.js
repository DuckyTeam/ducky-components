import SectionHeaderGeneral from '../SectionHeaderGeneral';
import SettingsPrivacyGeneral from '../SettingsPrivacyGeneral';
import Spacer from '../Spacer';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsSectionPrivacy(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <SectionHeaderGeneral
                onClick={props.handleButtonClick}
                title={'Personvern'}
            />
            <div>
                <SettingsPrivacyGeneral className={styles.content} />
                <Spacer size={'double'} />
            </div>
        </div>
    );
}

SettingsSectionPrivacy.propTypes = {
    className: PropTypes.string,
    handleButtonClick: PropTypes.func
};

export default SettingsSectionPrivacy;
