import SettingsItem from '../SettingsItem';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import TextAreaLarge from '../TextAreaLarge';
import React from 'react';
import Spacer from '../Spacer';
import styles from './styles.css';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function SettingsItemPassword(props) {
  return (
    <SettingsItem
      className={classNames({[props.className]: props.className})}
      expanded={props.expanded}
      handleCloseClick={props.onCloseClick}
      handleSaveButtonClicked={props.onSaveButtonClicked}
      inactive={props.inactive}
      label={'Passord'}
      onClick={props.onClick}
      value={'Endre'}
    >
      <Wrapper className={styles.passordWrapper}
        size={'standard'}
      >
        <TextAreaLarge
          errorMessage={'Skriv inn riktig passord'}
          label={'Gammelt passord'}
          maxLength={props.textAreaLength}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          placeholder={'Gammelt passord'}
          size={props.textSize}
          value={props.oldPassword}
        />
        <Spacer size={'double'} />
        <TextAreaLarge
          errorMessage={'Skriv inn et gyldig passord'}
          label={'Nytt passord'}
          maxLength={props.textAreaLength}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          placeholder={'Nytt passord'}
          size={props.textSize}
          value={props.newPassword}
        />
        <Typography className={styles.msgText}
          type="caption2Normal"
        >
          {'Passordet bør inneholdet minst 8 tegn.'}
        </Typography>
        <TextAreaLarge
          errorMessage={'Passordene stemmer ikke overens'}
          label={'Gjenta nytt passord'}
          maxLength={props.textAreaLength}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          placeholder={'Gjenta nytt passord'}
          size={props.textSize}
          value={props.confirmNewPassword}
        />
      </Wrapper>
    </SettingsItem>
  );
}

SettingsItemPassword.propTypes = {
  className: PropTypes.string,
  confirmNewPassword: PropTypes.string,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  newPassword: PropTypes.string,
  oldPassword: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  textAreaLength: PropTypes.number,
  textSize: PropTypes.oneOf(['default', 'large', 'huge'])
};

export default SettingsItemPassword;
