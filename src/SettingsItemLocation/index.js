import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Button from '../Button';
import IconAvaWrapper from '../IconAvaWrapper';
import PopoverMenuAnchor4 from '../PopoverMenuAnchor4';
import PopoverMenu from '../PopoverMenu';
import Popup from '../Popup';
import React from 'react';
import Spacer from '../Spacer';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItemLocation(props) {
    const renderPopup = (
        <Popup className={styles.popup}>
            <PopoverMenu text={'Østfold'} /><br />
            <PopoverMenu text={'Akershus'} /><br />
            <PopoverMenu text={'Oslo'} /><br />
            <PopoverMenu text={'Hedmark'} /><br />
            <PopoverMenu text={'Oppland'} /><br />
            <PopoverMenu text={'Buskerud'} /><br />
            <PopoverMenu text={'Vestfold'} /><br />
            <PopoverMenu text={'Telemark'} /><br />
            <PopoverMenu text={'Aust-Agder'} /><br />
            <PopoverMenu text={'Vest-Agder'} /><br />
            <PopoverMenu text={'Rogaland'} /><br />
            <PopoverMenu text={'Hordaland'} /><br />
            <PopoverMenu text={'Sogn og Fjordane'} /><br />
            <PopoverMenu text={'Møre og Romsdal'} /><br />
            <PopoverMenu text={'Sør-Trøndelag'} /><br />
            <PopoverMenu text={'Nord-Trøndelag'} /><br />
            <PopoverMenu text={'Nordland'} /><br />
            <PopoverMenu text={'Troms'} /><br />
            <PopoverMenu text={'Finnmark'} /><br />
        </Popup>
    );

    return (
            props.editMode
              ? <div>
                  <Wrapper className={classNames(styles.wrapperExpanded, {[props.className]: props.className})}
                      onClick={props.onClick}
                      size={'standard'}
                  >
                      <div className={styles.compositeExpanded}>
                          <Typography
                              className={props.inactive ? styles.typoTitleInactive : styles.typoTitle}
                              type={'bodyTextNormal'}
                          >
                              {'Bosted'}
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
                  <Wrapper className={styles.expandedContent}
                      size={'standard'}
                  >
                      <Typography
                          className={styles.typoTitle}
                          typ={'bodyTextNormal'}
                      >
                          {'Velg fylke:'}
                      </Typography>
                      <PopoverMenuAnchor4
                          onClick={props.onPopOverMenuClicked}
                      >
                          {props.selectedCounty}
                      </PopoverMenuAnchor4>
                  </Wrapper>
                  {props.isFilterPopupOpen ? renderPopup : null}
                  <Spacer size={'double'} />
              </div>
              : <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
                  onClick={props.onClick}
                  size={'standard'}
                >
                  <div className={styles.composite}>
                      <Typography
                          className={props.inactive ? styles.typoTitleInactive : styles.typoTitle}
                          type={'bodyTextNormal'}
                      >
                          {'Bosted'}
                      </Typography>
                      <Typography
                          className={props.inactive ? styles.typoContentInactive : styles.typoContent}
                          type={'bodyTextStrong'}
                      >
                          {props.selectedCounty}
                      </Typography>
                  </div>
              </Wrapper>
    );
}

SettingsItemLocation.propTypes = {
    className: PropTypes.string,
    editMode: PropTypes.bool,
    handleIconAvaWrapperClosed: PropTypes.func,
    handleSaveButtonClicked: PropTypes.func,
    inactive: PropTypes.bool,
    isFilterPopupOpen: PropTypes.bool,
    onClick: PropTypes.func,
    onPopOverMenuClicked: PropTypes.func,
    onRadioButtonClicked: PropTypes.func,
    selectedCounty: PropTypes.string
};

export default SettingsItemLocation;
