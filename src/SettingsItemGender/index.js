import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Button from '../Button';
import IconAvaWrapper from '../composites/IconAvaWrapper';
import RadioButton from '../RadioButton';
import React from 'react';
import Spacer from '../Spacer';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItemGender(props) {
    return (
            props.editMode
              ? <div>
                  <Wrapper className={classNames(styles.wrapperExpanded, {[props.className]: props.className})}
                      onClick={props.onClick}
                      size={'standard'}
                  >
                      <div className={styles.compositeExpanded}>
                          <Typography
                              className={styles.typoTitle}
                              type={'bodyTextNormal'}
                          >
                              {'Kjønn'}
                          </Typography>
                          <Button
                              className={styles.saveButton}
                              onClick={styles.handleSaveButtonClicked}
                          >
                              {'LAGRE'}
                          </Button>
                          <IconAvaWrapper
                              className={styles.IconAvaWrapper}
                              icon={'icon-close'}
                              onClick={props.handleIconAvaWrapperClosed}
                          />
                      </div>
                  </Wrapper>
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
                  <Spacer size={'double'} />
              </div>
              : <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
                  onClick={props.onClick}
                  size={'standard'}
                >
                  <div className={styles.composite}>
                      <Typography
                          className={styles.typoTitle}
                          type={'bodyTextNormal'}
                      >
                          {'Kjønn'}
                      </Typography>
                      <Typography
                          className={styles.typoContent}
                          type={'bodyTextStrong'}
                      >
                          {props.gender}
                      </Typography>
                  </div>
              </Wrapper>
    );
}

SettingsItemGender.propTypes = {
    className: PropTypes.string,
    editMode: PropTypes.bool,
    gender: PropTypes.gender,
    handleIconAvaWrapperClosed: PropTypes.func,
    handleSaveButtonClicked: PropTypes.func,
    onClick: PropTypes.func,
    onRadioButtonClicked: PropTypes.func
};

export default SettingsItemGender;
