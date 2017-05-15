import SectionHeaderGeneral from '../SectionHeaderGeneral';
import SettingsItemAppConnect from '../SettingsItemAppConnect';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function SettingsSectionApplications(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <div>
        <SectionHeaderGeneral
          title="Applikasjoner"
          />
      </div>
      <Wrapper className={styles.innerWrapper}
        size={'standard'}
        >
        <SettingsItemAppConnect
          className={styles.version}
          connected={props.facebookConnected}
          socialMedia={'Facebook'}
          userName={props.userName}
          />
        <SettingsItemAppConnect
          className={styles.version}
          connected={props.googlePlusConnected}
          socialMedia={'google+'}
          userName={props.userName}
          />
        <SettingsItemAppConnect
          connected={props.twitterConnected}
          socialMedia={'twitter'}
          userName={props.userName}
          />
        <Spacer size={'double'} />
      </Wrapper>
    </div>
  );
}

SettingsSectionApplications.propTypes = {
  className: PropTypes.string,
  facebookConnected: PropTypes.bool,
  googlePlusConnected: PropTypes.bool,
  onClick: PropTypes.func,
  twitterConnected: PropTypes.bool,
  userName: PropTypes.string
};

export default SettingsSectionApplications;
