import SettingsItem from '../SettingsItem';
import Wrapper from '../Wrapper';
import RadioButton from '../RadioButton';
import React from 'react';
import Spacer from '../Spacer';
import styles from './styles.css';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function SettingsItemGender(props) {
  return (
    <SettingsItem
      className={classNames({[props.className]: props.className})}
      expanded={props.expanded}
      inactive={props.inactive}
      label={'Kjønn'}
      onClick={props.onClick}
      onCloseClick={props.onCloseClick}
      onSaveButtonClicked={props.onSaveButtonClicked}
      value={props.gender}
      >
      <Wrapper className={styles.radioButtons}
        size={'standard'}
        >
        <RadioButton
          checked={props.gender.toLowerCase() === 'kvinne'}
          label={'Kvinne'}
          onClick={props.onRadioButtonClicked}
          />
        <Spacer size={'double'} />
        <RadioButton
          checked={props.gender.toLowerCase() === 'mann'}
          label={'Mann'}
          onClick={props.onRadioButtonClicked}
          />
        <Spacer size={'double'} />
        <RadioButton
          checked={props.gender.toLowerCase() === 'kjøttpinne'}
          label={'Kjøttpinne'}
          onClick={props.onRadioButtonClicked}
          />
      </Wrapper>
    </SettingsItem>
  );
}

SettingsItemGender.propTypes = {
  className: PropTypes.string,
  expanded: PropTypes.bool,
  gender: PropTypes.oneOf(['kvinne', 'mann', 'kjøttpinne']),
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onRadioButtonClicked: PropTypes.func,
  onSaveButtonClicked: PropTypes.func
};

export default SettingsItemGender;
